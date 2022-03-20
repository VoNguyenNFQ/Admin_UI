import React from 'react';
import AddForm from './AddForm';
import HeadDashboard from './HeadDashboard';

const AddSection = () => {
    return (
        <HeadDashboard
            header={'Add New Account'}
        >
        <AddForm />
        </HeadDashboard>
    );
};

export default AddSection;