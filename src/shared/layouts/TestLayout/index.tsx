import { FC, useContext } from 'react';
import { TestContext } from '../../../contexts/test/context';
interface Props {
    children?: any,
}

const TestLayout: FC<Props> = ({ children}) => {

    const { state } = useContext(TestContext);

    return (
        <div className="bg-blue-100 rounded-lg lg:w-75 sm:mx-4">
            {Array.isArray(children) 
            ? children?.filter((child) => child.props.keyName === state?.currentScreen) 
            :[children]?.filter((child) => child.props.keyName === state?.currentScreen)
            }
        </div>
    );
};

export default TestLayout;