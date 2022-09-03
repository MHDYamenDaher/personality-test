import { TEST_SCREENS } from './../../screens/Test/constants';
import { Dispatch } from 'react';
import Question from '../../shared/models/Question';

const TestActionTypes = {
    CHANGE_SCREEN: 'change_screen',
    CHANGE_QUESTION: 'change_question',
    RESET: 'reset',
};

const TestReducer = (state: any, action: any) => {
    switch (action.type) {
        case TestActionTypes.CHANGE_SCREEN:
            return {...state, currentScreen: action.payload}; 
        case TestActionTypes.CHANGE_QUESTION:
            return {...state, currentQuestion: action.payload};
        case TestActionTypes.RESET:
            return {
                currentScreent: TEST_SCREENS.INFO, 
                currentQuestion: {
                    id: '',
                    title: '',
                    answers: [],
                }   
            };
        default: 
            return {
                currentScreent: TEST_SCREENS.INFO, 
                currentQuestion: {
                    id: '',
                    title: '',
                    answers: [],
                }   
            };
    }
};

const openScreen = (dispatch: any):Dispatch<string> => (screen) => dispatch({type: TestActionTypes.CHANGE_SCREEN, payload: screen});

const changeQuestion = (dispatch: any):Dispatch<Question> => (question) => dispatch({type: TestActionTypes.CHANGE_QUESTION, payload: question});

const resetTest = (dispatch: any) => () => dispatch({type: TestActionTypes.RESET});

type tReducer = {
    [key: string]: any,
};

export const test: tReducer = {
    testReducer: TestReducer, 
    testActions: {openScreen, changeQuestion, resetTest} 
};