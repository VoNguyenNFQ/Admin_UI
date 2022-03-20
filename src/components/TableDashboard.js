import React from 'react';
import HeadDashboard from './HeadDashboard';

const TableDashboard = () => {
    return (
        <HeadDashboard
            header={"Account List"}
            content={`Lorem ipsum is simply dummy text of the printing 
                and typeseting industry. Lorem ipsum has been industry's standard dummy text.`}
        >
            <div id="resp-table" className="w-full table mt-5">
                <div id="resp-table-header" className="table-header-group font-bold">
                    <div className="table-header-cell table-cell p-3 text-justify border-b border-black border-solid">
                        Full Name
                    </div>
                    <div className="table-header-cell table-cell p-3 text-justify border-b border-black border-solid">
                        Email
                    </div>
                    <div className="table-header-cell table-cell p-3 text-justify border-b border-black border-solid">
                        Phone Number
                    </div>
                    <div className="table-header-cell table-cell p-3 text-justify border-b border-black border-solid">
                        Address
                    </div>
                </div>
                <div id="resp-table-body" className='table-row-group'>
                    <div className="resp-table-row table-row w-[40px]">
                        <div className="table-cell p-2">
                            Nguyễn Văn Vỏ
                        </div>
                        <div className="table-cell p-2">
                            vo.nguyen@nfq.asia
                        </div>
                        <div className="table-cell p-2">
                            0981343200
                        </div>
                        <div className="table-cell p-2">
                            TP. Can Tho, Viet Nam
                        </div>
                    </div>
                    <div className="resp-table-row table-row">
                        <div className="table-cell p-2">
                            Nguyễn Văn Vỏ
                        </div>
                        <div className="table-cell p-2">
                            vo.nguyen@nfq.asia
                        </div>
                        <div className="table-cell p-2">
                            0981343200
                        </div>
                        <div className="table-cell p-2">
                            TP. Can Tho, Viet Nam
                        </div>
                    </div>
                </div>
            </div>
        </HeadDashboard>
    );
};

export default TableDashboard;