import { FC, useContext } from 'react';
import { TestContext } from '../../../contexts/test/context';
import { TEST_SCREENS } from '../../../screens/Test/constants';

interface Props {
    children?: any,
}

const TestLayout: FC<Props> = ({ children}) => {

    const { state } = useContext(TestContext);

    return (
        <div className={`bg-blue-100 rounded-lg lg:w-75 sm:mx-4 ${state?.currentScreen === TEST_SCREENS.QUESTION ? 'lg:h-3/5' : 'h-96'}`}>
            {Array.isArray(children) 
            ? children?.filter((child) => child.props.keyName === state?.currentScreen) 
            :[children]?.filter((child) => child.props.keyName === state?.currentScreen)
            }
        </div>
    );
};

export default TestLayout;