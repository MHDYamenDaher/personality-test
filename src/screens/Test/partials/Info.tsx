import React, { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import UserInfo from '../../../shared/models/UserInfo';
import TestBodyLayout from '../../../shared/layouts/TestBodyLayout';
import { TEST_SCREENS } from '../constants';

interface Props {
    keyName?: String,
    userInfo: UserInfo,
    updateUserInfo: Dispatch<SetStateAction<UserInfo>>,
    openScreen:  Dispatch<SetStateAction<string>>
}

const Info: FC<Props> = ({userInfo, updateUserInfo, openScreen}) => {
    const {t: translate} = useTranslation();

    const handleNameChange = (event: any) => {
        if (event && event.target) {
            updateUserInfo({...userInfo, name: event.target.value });
        }
    };

    const handleStartAction = () => {
        openScreen(TEST_SCREENS.QUESTION);
    };

    const renderStartButton = () => {
        return (
            <button 
               disabled={userInfo?.name === ''}
               type='button'
               onClick={handleStartAction}
               className='w-60 mt-10 whitespace-nowrap disabled:opacity-25 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700'>
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
                      className="border border-gray-300 px-4 py-3 focus:border-blue-200 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder={translate('name_input_placeholder')}
                      value={userInfo?.name}
                      onChange={handleNameChange}
                    />
                </div>
                {renderStartButton()}
            </div>
        </TestBodyLayout>
    );

};

export default Info;