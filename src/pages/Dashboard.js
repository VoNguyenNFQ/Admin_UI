import React from 'react';
import Layout from '../components/Layout';
import LeftDashboard from '../components/LeftDashboard';
import RightDashboard from '../components/RightDashboard';

const Dashboard = () => {
    return (
        <Layout sidebar>
            <div className='mx-4 rounded flex gap-5'>
                <LeftDashboard />
                <RightDashboard />
            </div>
        </Layout>
    );
};

export default Dashboard;