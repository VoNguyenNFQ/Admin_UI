import React from 'react';
import RightBar from './RightBar';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className='my-4 mx-4 flex items-center justify-between'>
            <SearchBar />
            <RightBar />
        </div>
    );
};

export default Header;