import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {

    const { t: translate } = useTranslation();
    return (
        <div className="bg-blue-100 h-40 flex justify-center items-center p-10">
            <p className="text-white text-md font-bold">{translate('implemented_by').replace('_EMAIL_', 'yamen.daher.96@gmail.com')}</p>
        </div>
    );

};

export default Footer;