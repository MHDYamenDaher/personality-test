import React, { FC, useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import TestBodyLayout from '../../../shared/layouts/TestBodyLayout';
import Question from '../../../shared/models/Question';
import Answer from '../../../shared/models/Answer';
import AnswerContainer from '../../../components/AnswerContainer';
import UserAnswer from '../../../shared/models/UserAnswer';
import { TEST_SCREENS } from '../constants';
import { UserContext } from '../../../contexts/user/context';
import { ALL_QUESTIONS } from '../queries';
import { useQuery } from 'react-query';
import { TestContext } from '../../../contexts/test/context';

interface Props {
    keyName?: string,
}

const QuestionScreen: FC<Props> = () => {

    const {t: translate } = useTranslation();

    const {state, updateAnswers} = useContext(UserContext);
    const {state: testState, openScreen, changeQuestion } = useContext(TestContext);

    const { data: questions } = useQuery<Array<Question>>(ALL_QUESTIONS);

    const isLastQuestion = parseInt(testState.currentQuestion.id) === questions?.length;
    const isFirstQuestion = parseInt(testState.currentQuestion.id) === 1;

    const [checkedAnswer, setCheckedAnswer] = useState<Answer>({
        id: '',
        title: '',
        introvertScore: 0,
        extrovertScore: 0,
    });

    const handleConfirmAnswer = () => {

        updateAnswers({answer: checkedAnswer, answers: state.answers, question: testState.currentQuestion});

        if (isLastQuestion) {
            openScreen(TEST_SCREENS.RESULT);
        } else {
            setCheckedAnswer({
                id: '',
                title: '',
                introvertScore: 0,
                extrovertScore: 0,
            });
            const nextQuestion = questions?.find((question: Question) => question.id === (parseInt(testState.currentQuestion.id) + 1).toString()) as Question;
            changeQuestion(nextQuestion);
        }
    };

    const handlePrevAction = () => {
        const nextQuestion = questions?.find((question: Question) => question.id === (parseInt(testState.currentQuestion.id) - 1).toString()) as Question;
        changeQuestion(nextQuestion);
    };

    useEffect(() => {
        const selectedUserAnswer = state.answers.find((userAnswer: any) => userAnswer.questionId === testState.currentQuestion.id ) as UserAnswer;
        if (selectedUserAnswer) {
            const selectedAnswer = testState.currentQuestion.answers.find((answer: Answer) => answer.id === selectedUserAnswer.answerId) as Answer;
            setCheckedAnswer(selectedAnswer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [testState.currentQuestion]);


    const renderNextButton = () => {
        return (
            <button 
               disabled={checkedAnswer?.id === ''}
               type='button'
               onClick={handleConfirmAnswer}
               className='mt-5 md:whitespace-nowrap disabled:opacity-25 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-100 hover:bg-red-50'>
                {isLastQuestion ? translate('submit_btn_label') : translate('next_question_btn_label')}
            </button>
        );
    };

    const renderPrevButton = () => {
        return (
            <button 
               type='button'
               onClick={handlePrevAction}
               className='mt-5 md:whitespace-nowrap disabled:opacity-25 px-4  py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-100 hover:bg-red-50'>
                {translate('previous_question_btn_label')}
            </button>
        );
    };

    return (
        <TestBodyLayout title={testState.currentQuestion?.title}>
            <div className="flex flex-col px-5 mt-4">
                {testState.currentQuestion?.answers && testState.currentQuestion?.answers.map((answer: Answer) => (
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