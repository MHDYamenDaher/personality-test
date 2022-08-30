import React, { ReactNode, FC } from 'react';
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';

interface Props {
    children?: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
