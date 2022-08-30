import React, {FC} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainLayout from '../../shared/layouts/MainLayout';


const Landing: FC = () => {

    const {t: translate} = useTranslation();

    return (
        <MainLayout>
            <div className="xl:container md:container mx-auto">
                <div className='grid grid-row-auto justify-center text-blue-500 italic text-3xl font-bold mt-20 mx-4 md:mx-0 text-center'>
                    {translate('landing_screen_title')}
                </div>
                <div className='grid md:grid-cols-2 gap-10 mt-12 mx-4 md:mx-0'>
                    <div className="">
                        <img className="rounded-lg" src='./assets/images/introvert.png' alt='Introvert' />
                    </div>
                    <div className="">
                        <img className="rounded-lg" src='./assets/images/extrovert.png' alt='Extrovert' />
                    </div>
                </div>
            </div>
            <div className='bg-blue-200 mt-20 py-20'>
                <div className='grid grid-row-auto justify-center text-blue-500 italic text-3xl font-bold'>
                    {translate('how_it_works_label')}
                </div>
                <div className="xl:container md:container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gab-4 mt-10">
                        <div className='flex flex-col justify-center align-center mx-10 md:mx-0 mt-5 md:mt-0'>
                            <div className='flex justify-center align-center'>
                                <div className='flex justify-center align-center w-50 px-10 py-8 bg-white rounded-full'>
                                    <span className='text-2xl text-blue-500'>1</span>
                                </div>
                            </div>
                            <p className="text-center text-lg text-blue-500 font-bold mt-4">{translate('how_it_works_note_1_title')}</p>
                            <p className="text-center text-sm text-blue-400 font-bold mt-4">{translate('how_it_works_note_1_description')}</p>
                        </div>
                        <div className='flex flex-col justify-center align-center mx-10 mt-5 md:mt-0'>
                            <div className='flex justify-center align-center'>
                                <div className='flex justify-center align-center w-50 px-10 py-8 bg-white rounded-full'>
                                    <span className='text-2xl text-blue-500'>2</span>
                                </div>
                            </div>
                            <p className="text-center text-lg text-blue-500 font-bold mt-4">{translate('how_it_works_note_2_title')}</p>
                            <p className="text-center text-sm text-blue-400 font-bold mt-4">{translate('how_it_works_note_2_description')}</p>
                        </div>
                        <div className='flex flex-col justify-center align-center mx-10 md:mx-0 mt-5 md:mt-0'>
                            <div className='flex justify-center align-center'>
                                <div className='flex justify-center align-center w-50 px-10 py-8 bg-white rounded-full'>
                                    <span className='text-2xl text-blue-500'>3</span>
                                </div>
                            </div>
                            <p className="text-center text-lg text-blue-500 font-bold mt-4">{translate('how_it_works_note_3_title')}</p>
                            <p className="text-center text-sm text-blue-400 font-bold mt-4">{translate('how_it_works_note_3_description')}</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-row-auto justify-center text-blue-500 text-3xl font-bold mt-10'>
                    <Link to='/test' className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700">
                        {translate('start_the_test_btn_label')}
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
}

export default Landing;