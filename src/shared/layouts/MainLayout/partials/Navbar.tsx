import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom';

const Navbar: FC = () => {

    const { t: translate } = useTranslation();

    const { pathname } = useLocation();

    const isTestScreen = pathname.indexOf('test') === 1;

    return (
        <div className="relative bg-blue-100">
            <div className="max-w-8xl mx-auto py-4 px-4 sm:px-6">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                    <Link to='/landing' className="flex flex-row justify-start items-center lg:flex-1 xl:flex-1">
                        <UserCircleIcon className="w-9 h-9 text-white"  />
                        <span className="ml-2 font-bold text-xl text-white">{translate('project_name')}</span>
                    </Link>
                    {!isTestScreen && (
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link to='/test' className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-100 hover:bg-red-50">
                            {translate('start_the_test_btn_label')}
                        </Link>
                    </div>
                    )}  
                </div>
            </div>
        </div>
    );

};

export default Navbar;