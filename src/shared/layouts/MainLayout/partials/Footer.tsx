import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {

    const { t: translate } = useTranslation();
    return (
        <div className="bg-blue-100 h-20 w-full p-10">
            <div className="flex items-center w-full h-full justify-center">
                <p className="text-white text-md font-bold">{translate('implemented_by').replace('_EMAIL_', 'yamen.daher.96@gmail.com')}</p>
            </div>
        </div>
    );

};

export default Footer;