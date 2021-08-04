import React from 'react'

const ProgressBar = ({ progressPercentage=15 }) => {
    return (
        <div className=' h-1 w-full bg-gray-300 rounded-full'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full rounded-full ${
                    progressPercentage < 10 ? 'bg-red-600' : 'bg-primary'}`}>
            </div>
        </div>
    );
};

export default ProgressBar
