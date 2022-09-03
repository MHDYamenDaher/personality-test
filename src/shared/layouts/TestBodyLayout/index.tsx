import React, { FC, ReactNode } from 'react';

interface Props {
    children?: ReactNode,
    title: String,
}

const TestBodyLayout: FC<Props> = ({ children, title}) => {
    return (
        <div className='w-full'>
            <div className='py-3 px-5'>
                <p className="text-2xl text-white">{title}</p>
            </div>
            <hr className="w-full text-white" />
            <div className='py-3 px-5'>
                {children}
            </div>
        </div>
    );
};

export default TestBodyLayout;