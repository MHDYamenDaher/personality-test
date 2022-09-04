import { FC } from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import TestLayout from '../../shared/layouts/TestLayout';
import { TEST_SCREENS } from './constants';
import Info from './partials/Info';
import QuestionSreen from './partials/Question';
import Result from './partials/Result';
import { TestProvider } from '../../contexts/test/context';
import { UserProvider } from '../../contexts/user/context';

const Test: FC = () => {
    return (
        <MainLayout>
            <div className="test w-100 h-92 flex justify-center items-center">
                <TestProvider>
                    <UserProvider>
                        <TestLayout>
                            <Info keyName={TEST_SCREENS.INFO}  />
                            <QuestionSreen keyName={TEST_SCREENS.QUESTION} />
                            <Result keyName={TEST_SCREENS.RESULT}  />
                        </TestLayout>
                    </UserProvider>
                </TestProvider>
            </div>
        </MainLayout>
    );
};

export default Test;

