import React from 'react';
import HeadDashboard from './HeadDashboard';
import tw from "tailwind-styled-components"

const Table = () => {

    const TableCell = tw.div`
        table-cell p-2 border-b border-gray
    `
    const TableHeaderCell = tw.div`
        table-header-cell table-cell p-3 text-justify border-b border-gray border-solid
    `

    return (
        <HeadDashboard
            header={"Account List"}
            content={`Lorem ipsum is simply dummy text of the printing 
                and typeseting industry. Lorem ipsum has been industry's standard dummy text.`}
        >
            <div id="resp-table" className="w-full table mt-5">
                <div id="resp-table-header" className="table-header-group font-bold">
                    <TableHeaderCell>Full Name</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>Phone Number</TableHeaderCell>
                    <TableHeaderCell>Address</TableHeaderCell>
                    <TableHeaderCell></TableHeaderCell>
                </div>
                <div id="resp-table-body" className='table-row-group'>
                    <div className="resp-table-row table-row w-[40px]">
                        <TableCell>Nguyễn Văn Vỏ</TableCell>
                        <TableCell>vo.nguyen@nfq.asia</TableCell>
                        <TableCell>0981343200</TableCell>
                        <TableCell>TP. Can Tho, Viet Nam</TableCell>
                        <div className="table-cell p-2 border-b border-gray cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="resp-table-row table-row">
                        <TableCell>
                            Nguyễn Văn Vỏ
                        </TableCell>
                        <TableCell>
                            vo.nguyen@nfq.asia
                        </TableCell>
                        <TableCell>
                            0981343200
                        </TableCell>
                        <TableCell>
                            TP. Can Tho, Viet Nam
                        </TableCell>
                        <div className="table-cell p-2 border-b border-gray cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </HeadDashboard>
    );
};

export default Table;