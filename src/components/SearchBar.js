import React from 'react';

const SearchBar = () => {
    return (
        <div className='relative'>
            <input className="border-2 border-white focus:ring-primary focus:border-primary bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;