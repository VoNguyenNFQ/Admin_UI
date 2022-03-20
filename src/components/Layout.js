import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Snackbar from './Snackbar';
const Layout = ({ sidebar, children }) => {

    return (
        <>
            {sidebar
                ?
                <>
                    <Sidebar />
                    <div className='flex-1'>
                        <Header />
                        {/* <div className='p-5 w-full'> */}
                        {children}
                        {/* </div> */}
                    </div>
                </>
                :
                children
            }
            <Snackbar />
        </>
    );
};

export default Layout;