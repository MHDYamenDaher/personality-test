import { FC, createContext, useReducer, Dispatch } from 'react';
import { reducer } from './reducer';

const initUserState = {name: '', answers: []};

export const UserContext = createContext<any>(initUserState);

interface Props {
    children?: any
}

export const UserProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer?.userReducer, initUserState);

    type tBoundAction = {
        [key: string]: Dispatch<any>,
    };

    const boundActions: tBoundAction = {};
    for (let key in reducer?.userActions) {
        boundActions[key] = reducer.userActions[key](dispatch);
    }

    return (
        <UserContext.Provider value={{ state, ...boundActions }}>
            {children}
        </UserContext.Provider>
    );
};

