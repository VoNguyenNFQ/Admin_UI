import React from 'react';
import SnackbarContextProvider from './Snackbar.context';

const AppContextProvider = (props) => {
    return (
        <SnackbarContextProvider>
            {props.children}
        </SnackbarContextProvider>
    );
};

export default AppContextProvider;