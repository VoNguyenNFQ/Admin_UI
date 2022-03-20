import React, { useState } from 'react';

const AddForm = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => setOpen(true)} className="rounded-full bg-primary text-white px-4 py-2" type="button">Add</button>
            {open &&
                <div className="bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                    <div className="mt-10 mx-auto z-51 relative px-4 w-full min-w-[600px] max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="flex justify-end p-2">
                                <button onClick={() => setOpen(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div style={{ alignSelf: "center" }} className="px-8 pb-6 text-left bg-white shadow-lg rounded-md">
                                <h3 className="text-2xl font-bold text-center">Form</h3>
                                <form>
                                    <div className="mt-4">
                                        <div className='grid grid-cols-2 gap-6'>
                                            <div>
                                                <label className="block" htmlFor="email">First Name</label>
                                                <input
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="Binh"
                                                    className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary"
                                                />
                                            </div>
                                            <div>
                                                <label className="block" htmlFor="email">Last Name</label>
                                                <input
                                                    name="lastName"
                                                    type="text"
                                                    placeholder="Thai"
                                                    className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 gap-6'>
                                            <div className='mt-4'>
                                                <label className="block" htmlFor="email">City</label>
                                                <input
                                                    name="city"
                                                    type="text"
                                                    placeholder="Ho Chi Minh"
                                                    className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary"
                                                />
                                            </div>
                                            <div className='mt-4'>
                                                <label className="block" htmlFor="email">Country</label>
                                                <input
                                                    name="country"
                                                    type="text"
                                                    placeholder="Viet Nam"
                                                    className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block">Phone Number</label>
                                            <input
                                                name="phone"
                                                type="number"
                                                placeholder="0987654321"
                                                className="w-full px-4 py-2 mt-2 border rounded-full  focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label className="block">Email</label>
                                            <input
                                                name="email"
                                                type="text"
                                                placeholder="abc@gmail.com"
                                                className="w-full px-4 py-2 mt-2 border rounded-full  focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary"
                                            />
                                        </div>
                                        <div className="flex items-baseline justify-center">
                                            <button
                                                className="px-6 py-2 mt-4 text-white bg-primary rounded-full hover:bg-primary"
                                            >
                                                Add
                                            </button>
                                            <button disabled className="px-6 py-2 mt-4 text-white bg-primary  rounded-full opacity-50 cursor-not-allowed">
                                                Add
                                            </button>
                                            <button className="px-6 py-2 mt-4 ml-3 bg-transparent text-primary border rounded-full" >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default AddForm;