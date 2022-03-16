import React from 'react';

const RightBar = () => {
    return (
        <div className='flex gap-3'>
            <div className='justify-self-end bg-white hover:bg-primary cursor-pointer hover:text-white rounded-full w-[40px] h-[40px] relative'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute ml-2 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </div>
            <div className='justify-self-end bg-white hover:bg-primary cursor-pointer hover:text-white rounded-full w-[40px] h-[40px] relative'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute ml-2 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </div>
            <div className='justify-self-end bg-white rounded-full flex items-center gap-4 h-[40px]'>
                <div className='ml-2'>Nguyễn Văn Vỏ</div>
                <div className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
            <div className='justify-self-end bg-white hover:bg-primary cursor-pointer hover:text-white rounded-full flex items-center h-[40px]'>
                <div className='ml-3 mr-3'>Login</div>
            </div>
            <div className='justify-self-end bg-white hover:bg-primary cursor-pointer hover:text-white rounded-full flex items-center h-[40px]'>
                <div className='ml-3 mr-3'>Register</div>
            </div>
        </div>
    );
};

export default RightBar;