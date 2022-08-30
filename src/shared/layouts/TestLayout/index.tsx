import React, { FC } from 'react';
import { TEST_SCREENS } from '../../../screens/Test/constants';

interface Props {
    children?: any,
    currentScreen: String,
}

const TestLayout: FC<Props> = ({ children, currentScreen}) => {
    return (
        <div className={`bg-white rounded-lg lg:w-75 sm:mx-4 ${currentScreen === TEST_SCREENS.QUESTION ? 'lg:h-3/5' : 'h-96'}`}>
            {Array.isArray(children) 
            ? children?.filter((child) => child.props.keyName === currentScreen) 
            :[children]?.filter((child) => child.props.keyName === currentScreen)
            }
        </div>
    );
};

export default TestLayout;