import { FC, createContext, useReducer, Dispatch } from 'react';
import { TEST_SCREENS } from '../../screens/Test/constants';
import { test } from './reducer';

const initTestState = { 
    currentScreen: TEST_SCREENS.INFO, 
    currentQuestion: {
        id: '',
        title: '',
        answers: [],
    }, 
};

export const TestContext = createContext<any>(initTestState);

interface Props {
    children?: any
}

export const TestProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(test?.testReducer, initTestState);

    type tBoundAction = {
        [key: string]: Dispatch<any>,
    };

    const boundActions: tBoundAction = {};
    for (let key in test?.testActions) {
        boundActions[key] = test.testActions[key](dispatch);
    }

    return (
        <TestContext.Provider value={{ state, ...boundActions }}>
            {children}
        </TestContext.Provider>
    );
};