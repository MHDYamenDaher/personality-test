import React, { FC, useEffect, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TestBodyLayout from '../../../shared/layouts/TestBodyLayout';
import { TEST_SCREENS } from '../constants';
import {UserContext} from '../../../contexts/user/context';
import { TestContext } from '../../../contexts/test/context';
import { useQuery } from 'react-query';
import Question from '../../../shared/models/Question';
import { ALL_QUESTIONS } from '../queries';

interface Props {
    keyName?: String,
}

const Info: FC<Props> = () => {
    const {t: translate} = useTranslation();

    const { addName } = useContext(UserContext);
    const { openScreen, changeQuestion } = useContext(TestContext);

    const [name, setName] = useState('');

    const { data: questions , refetch: refetchQuestions } = useQuery<Array<Question>>(ALL_QUESTIONS, {
        enabled: false,
    });

    useEffect(() => {
        refetchQuestions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleNameChange = (event: any) => {
        if (event && event.target) {
            setName(event.target.value);
        }
    };

    const handleStartAction = () => {
        const firstQuestion = questions?.find((question: Question) => question.id === '1') as Question;
        addName(name);
        changeQuestion(firstQuestion);
        openScreen(TEST_SCREENS.QUESTION);
    };

    const renderStartButton = () => {
        return (
            <button 
               disabled={name === '' || !questions || questions?.length === 0}
               type='button'
               onClick={handleStartAction}
               className='w-60 mt-10 whitespace-nowrap disabled:opacity-25 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-100 hover:bg-red-50'>
                {translate('start_btn_label')}
            </button>
        );
    };

    return (
        <TestBodyLayout title={translate('enter_your_name_label')}>
            <div className="w-full h-60 flex flex-col justify-center items-center">
                <div className='w-80'>
                    <input 
                      type="text" 
                      name="price" 
                      id="price" 
                      className="px-4 py-3 focus:outline-none focus:border-blue-50 focus:ring-1 focus:ring-blue-50 block w-full sm:text-sm rounded-md"
                      placeholder={translate('name_input_placeholder')}
                      value={name}
                      onChange={handleNameChange}
                    />
                </div>
                {renderStartButton()}
            </div>
        </TestBodyLayout>
    );

};

export default Info;