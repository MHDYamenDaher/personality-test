import React, { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TestBodyLayout from '../../../shared/layouts/TestBodyLayout';
import Question from '../../../shared/models/Question';
import UserInfo from '../../../shared/models/UserInfo';
import Answer from '../../../shared/models/Answer';
import AnswerContainer from '../../../components/AnswerContainer';
import UserAnswer from '../../../shared/models/UserAnswer';
import { TEST_SCREENS } from '../constants';

interface Props {
    keyName?: string,
    userInfo: UserInfo,
    updateUserInfo: Dispatch<SetStateAction<UserInfo>>,
    questions?: Array<Question>,
    currentQuestion: Question,
    setNextQuestion: Dispatch<SetStateAction<Question>>,
    openScreen: Dispatch<SetStateAction<string>>,
}

const QuestionScreen: FC<Props> = ({userInfo, updateUserInfo, currentQuestion, setNextQuestion, questions, openScreen }) => {

    const {t: translate } = useTranslation();

    const isLastQuestion = parseInt(currentQuestion.id) === questions?.length;
    const isFirstQuestion = parseInt(currentQuestion.id) === 1;

    const [checkedAnswer, setCheckedAnswer] = useState<Answer>({
        id: '',
        title: '',
        introvertScore: 0,
        extrovertScore: 0,
    });

    const handleConfirmAnswer = () => {

        const selectedUserAnswerIndex = userInfo.answers.findIndex((userAnswer) => userAnswer.questionId === currentQuestion.id);

        if (selectedUserAnswerIndex >= 0) {
            const newAnswers = userInfo.answers;
            newAnswers.splice(selectedUserAnswerIndex, 1);
            newAnswers.push({questionId: currentQuestion.id, answerId: checkedAnswer.id});
            updateUserInfo({...userInfo, answers: newAnswers});
        } else {
            const answer: UserAnswer = {questionId: currentQuestion.id, answerId: checkedAnswer.id};
            updateUserInfo({...userInfo, answers: [...userInfo.answers, answer]  });
        }

        if (isLastQuestion) {
            openScreen(TEST_SCREENS.RESULT);
        } else {
            setCheckedAnswer({
                id: '',
                title: '',
                introvertScore: 0,
                extrovertScore: 0,
            });
            const nextQuestion = questions?.find((question: Question) => question.id === (parseInt(currentQuestion.id) + 1).toString()) as Question;
            setNextQuestion(nextQuestion);
        }
    };

    const handlePrevAction = () => {
        const nextQuestion = questions?.find((question: Question) => question.id === (parseInt(currentQuestion.id) - 1).toString()) as Question;
        setNextQuestion(nextQuestion);
    };

    useEffect(() => {
        const selectedUserAnswer = userInfo.answers.find((userAnswer) => userAnswer.questionId === currentQuestion.id ) as UserAnswer;
        if (selectedUserAnswer) {
            const selectedAnswer = currentQuestion.answers.find((answer) => answer.id === selectedUserAnswer.answerId) as Answer;
            setCheckedAnswer(selectedAnswer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestion]);


    const renderNextButton = () => {
        return (
            <button 
               disabled={checkedAnswer?.id === ''}
               type='button'
               onClick={handleConfirmAnswer}
               className='w-32 sm:w-60 mt-10 md:whitespace-nowrap disabled:opacity-25 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700'>
                {isLastQuestion ? translate('submit_btn_label') : translate('next_question_btn_label')}
            </button>
        );
    };

    const renderPrevButton = () => {
        return (
            <button 
               type='button'
               onClick={handlePrevAction}
               className='w-32 sm:w-60 mt-10 md:whitespace-nowrap disabled:opacity-25 px-4  py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700'>
                {translate('previous_question_btn_label')}
            </button>
        );
    };

    return (
        <TestBodyLayout title={currentQuestion?.title}>
            <div className="flex flex-col px-5 mt-4">
                {currentQuestion?.answers && currentQuestion?.answers.map((answer: Answer) => (
                    <AnswerContainer 
                      key={answer?.id}
                      answer={answer}
                      onClick={() => setCheckedAnswer(answer)}
                      checked={checkedAnswer?.id === answer.id}
                    />
                ))}
                <div className={`flex flex-row w-full ${isFirstQuestion ? 'justify-end' : 'justify-between'}`}>
                    {!isFirstQuestion && renderPrevButton()}
                    {renderNextButton()}
                </div>
            </div>
        </TestBodyLayout>
    );

};

export default QuestionScreen;