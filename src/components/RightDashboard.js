import React from 'react';
import HeadDashboard from './HeadDashboard';

const RightDashboard = () => {
    return (
        <div className='w-1/3'>
            <HeadDashboard
                header={"Latest Visit"}
                content={"Lorem ipsum is simply dummy text of the"}
            >
            <ul>
                <li className='my-5'>--- 20 - 3 - 2022, Nguyen Vo</li>
                <li className='my-5'>--- 20 - 3 - 2022, Nguyen Vo</li>
                <li className='my-5'>--- 20 - 3 - 2022, Nguyen Vo</li>
                <li className='my-5'>--- 20 - 3 - 2022, Nguyen Vo</li>
                <li className='my-5'>--- 20 - 3 - 2022, Nguyen Vo</li>
                <li className='my-5'>--- 20 - 3 - 2022, Nguyen Vo</li>
            </ul>
            </HeadDashboard>
        </div>
    );
};

export default RightDashboard;