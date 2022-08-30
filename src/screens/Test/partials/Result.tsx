import React, { FC, useMemo, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import TestBodyLayout from '../../../shared/layouts/TestBodyLayout';
import Answer from '../../../shared/models/Answer';
import Question from '../../../shared/models/Question';
import UserInfo from '../../../shared/models/UserInfo';
import { TEST_SCREENS } from '../constants';

interface Props {
    keyName?: string,
    userInfo: UserInfo,
    questions?: Array<Question>,
    openScreen: Dispatch<SetStateAction<string>>,
    resetUserInfo: () => void,
}

const Result: FC<Props> = ({ userInfo, questions, openScreen, resetUserInfo }) => {

    const {t: translate } = useTranslation();


    const results = useMemo(() => {

        let result = {inrtovert: 0, extrovert: 0};

        if (userInfo.answers) {
            result = userInfo.answers.reduce((accumulator: any, item) => {
                const question = questions?.find((question) => question.id === item.questionId) as Question;
                const answer = question.answers.find((answer) => answer.id === item.answerId) as Answer;

                accumulator.inrtovert += answer.introvertScore;
                accumulator.extrovert += answer.extrovertScore;

                return accumulator;

            }, {inrtovert: 0, extrovert: 0}) as any;
        }

        return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TestBodyLayout title={translate('result_title').replace('__NAME__', userInfo.name)}>
            <div className="w-full flex flex-row justify-center items-center mt-20">
                <p className="text-2xl italic text-gray-600 mr-10">{translate('introvert_label')} <span className='text-blue-500'>{`${results?.inrtovert}%`}</span></p>
                <p className="text-2xl italic text-gray-600">{translate('extrovert_label')} <span className='text-blue-500'>{`${results?.extrovert}%`}</span></p>
            </div>
            <div className='flex flex-rwo justify-center'>
                <button 
                type='button'
                onClick={() => {
                    resetUserInfo();
                    openScreen(TEST_SCREENS.INFO);
                }}
                className='w-60 mt-10 whitespace-nowrap disabled:opacity-25 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700'>
                    {translate('take_test_again_label')}
                </button>
            </div>
        </TestBodyLayout>
    );

};

export default Result;