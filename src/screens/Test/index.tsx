import React, {FC, useEffect, useState} from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import UserInfo from '../../shared/models/UserInfo';
import TestLayout from '../../shared/layouts/TestLayout';
import { TEST_SCREENS } from './constants';
import Info from './partials/Info';
import Question from '../../shared/models/Question';
import { useQuery } from 'react-query';
import { ALL_QUESTIONS } from './queries';
import QuestionSreen from './partials/Question';
import Result from './partials/Result';

const Test: FC = () => {

    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: '',
        answers: [],
    });

    const [currentScreen, setCurrentScreen] = useState(TEST_SCREENS.INFO);
    const [currentQuestion, setCurrentQuestion] = useState<Question>({
        id: '',
        title: '',
        answers: [],
    });

    const { data: questions , refetch: refetchQuestions } = useQuery<Array<Question>>(ALL_QUESTIONS, {
        enabled: false,
    });

    useEffect(() => {
        refetchQuestions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(questions) {
            const firstQuestion = questions.find((question: Question) => question.id === '1') as Question;
            setCurrentQuestion(firstQuestion);
        } 
    }, [questions]);

    const handleResetTest = () => {
        const firstQuestion = questions?.find((question: Question) => question.id === '1') as Question;
        setCurrentQuestion(firstQuestion);
        setUserInfo({name: userInfo.name, answers: []})
    };
    
    return (
        <MainLayout>
            <div className="bg-blue-200 w-100 h-92 flex justify-center items-center">
                <TestLayout currentScreen={currentScreen}>
                    <Info 
                       keyName={TEST_SCREENS.INFO}  
                       userInfo={userInfo}
                       updateUserInfo={setUserInfo}
                       openScreen={setCurrentScreen}
                    />
                    <QuestionSreen
                       keyName={TEST_SCREENS.QUESTION}  
                       userInfo={userInfo}
                       updateUserInfo={setUserInfo}
                       questions={questions}
                       currentQuestion={currentQuestion}
                       setNextQuestion={setCurrentQuestion}
                       openScreen={setCurrentScreen}
                    />
                    <Result 
                      keyName={TEST_SCREENS.RESULT}  
                      userInfo={userInfo}
                      questions={questions}
                      openScreen={setCurrentScreen}
                      resetUserInfo={handleResetTest}
                    />
                </TestLayout>
            </div>
        </MainLayout>
    );

};

export default Test;

