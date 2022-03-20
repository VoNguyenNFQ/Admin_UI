import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {

    useEffect(() => {
        const element = document.querySelectorAll('li a');
        element.length > 0 && [...element].map(el => {
            el.addEventListener('click', function () {
                const isActived = el.classList.contains("sidebar-active");
                if (isActived) {
                    el.classList.remove('sidebar-active')
                } else {
                    [...element].map(item => item.classList.remove('sidebar-active'));
                    el.classList.add('sidebar-active');
                }
            })
        })
    })

    return (
        <aside className="w-64 h-[100vh]" aria-label="Sidebar">
            <div className="w-64 fixed h-full overflow-y-auto py-4 px-3 bg-white dark:bg-text">
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="flex items-center p-2 text-base font-normal text-text rounded-full dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white">
                            <svg className="w-6 h-6 text-text transition duration-75 dark:text-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/data" className="flex items-center p-2 text-base font-normal text-text rounded-full dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white">
                            <svg className="flex-shrink-0 w-6 h-6 text-text transition duration-75 dark:text-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;