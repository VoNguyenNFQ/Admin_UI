import React from 'react';
import AddSection from '../components/AddSection';
import Layout from '../components/Layout';
import Table from '../components/Table';

const DataTable = () => {
    return (
        <Layout sidebar>
            <div className='mt-8 mx-4 rounded'>
                <AddSection />
                <Table />
            </div>
        </Layout>
    );
};

export default DataTable;