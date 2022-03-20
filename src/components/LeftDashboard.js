import React from 'react';
import HeadDashboard from './HeadDashboard';
import TableDashboard from './TableDashboard';

const LeftDashboard = () => {
    return (
        <div className='w-2/3'>
            <HeadDashboard
                header={"Welcome to Dashboard"}
                content={`Lorem ipsum is simply dummy text of the printing 
                and typeseting industry. Lorem ipsum has been industry's standard dummy text.`}
            >
            </HeadDashboard>
            <TableDashboard />
        </div>
    );
};

export default LeftDashboard;