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
          className={`flex flex-row justify-start items-center w-full border px-2 py-2 rounded-md answer-container my-1
          ${checked ? 'border-blue-400' : 'border-gray-400'}`}
        >
            <div className={`flex justify-center items-center px-3 py-1 border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white answer-number 
            ${checked ? 'bg-blue-400 text-white' : 'bg-white text-blue-400'}`}>
                {answer?.id}
            </div>
            <p className="ml-4 text-gray-500">{answer?.title}</p>
        </div>
    );
};

export default AnswerContainer;