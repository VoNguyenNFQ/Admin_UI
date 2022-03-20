import React from 'react';

const HeadDashboard = ({ header, content, children }) => {
    return (
        <div className='px-5 py-5 bg-white w-full rounded my-4'>
            <h1 className='text-3xl font-semibold mb-3'>{header}</h1>
            <p>{content}</p>
            {children}
        </div>
    );
};

export default HeadDashboard;