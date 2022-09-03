import React, { FC } from 'react';
import Answer from '../../shared/models/Answer';

interface Props {
    answer: Answer,
    onClick: () => void,
    checked: boolean,
}

const AnswerContainer: FC<Props> = ({ answer, onClick, checked}) => {
    return (
        <div
          tabIndex={-1}
          role='button'
          onClick={onClick}
          className={`flex flex-row justify-start items-center w-full border px-2 py-2 rounded-md answer-container my-1 hover:border-red-100
          ${checked ? 'border-red-100' : 'border-white'}`}
        >
            <div className={`flex justify-center items-center px-3 py-1 border border-blue-400 rounded-md hover:bg-red-100 hover:text-white answer-number 
            ${checked ? 'bg-red-100 text-white' : 'bg-white text-blue-100'}`}>
                {answer?.id}
            </div>
            <p className="ml-4 text-white">{answer?.title}</p>
        </div>
    );
};

export default AnswerContainer;