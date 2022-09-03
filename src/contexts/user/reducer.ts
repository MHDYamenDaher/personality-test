import { Dispatch } from 'react';
import UserAnswer from '../../shared/models/UserAnswer';

const UserActionTypes = {
    ADD_NAME: 'add_name',
    UPDATE_ANSWERS: 'update_answers',
    RESET: 'reset',
};

const UserReducer = (state: any, action: any) => {
    switch (action.type) {
        case UserActionTypes.ADD_NAME:
            return {...state, name: action.payload}; 
        case UserActionTypes.UPDATE_ANSWERS:
            return {...state, answers: action.payload};
        case UserActionTypes.RESET:
            return {name: '', answers: []};
        default: 
            return {name: '', answers: []};
    }
};

const addName = (dispatch: any):Dispatch<string> => (name) => dispatch({type: UserActionTypes.ADD_NAME, payload: name});

const updateAnswers = (dispatch: any):Dispatch<any> => ({answer, answers, question}) => {
    const selectedUserAnswerIndex = answers?.findIndex((userAnswer: any) => userAnswer?.questionId === question?.id);
    if (selectedUserAnswerIndex >= 0) {
        const newAnswers = answers;
        newAnswers.splice(selectedUserAnswerIndex, 1);
        newAnswers.push({questionId: question.id, answerId: answer.id});
        dispatch({type: UserActionTypes.UPDATE_ANSWERS, payload: newAnswers});
    }else {
        const newAnswer: UserAnswer = {questionId: question.id, answerId: answer?.id};
        dispatch({type: UserActionTypes.UPDATE_ANSWERS, payload: [...answers, newAnswer]});
    }
};

const resetUser = (dispatch: any) => () => dispatch({type: UserActionTypes.RESET});

type tReducer = {
    [key: string]: any,
};

export const reducer: tReducer = {
    userReducer: UserReducer, 
    userActions: {addName, updateAnswers, resetUser} 
};