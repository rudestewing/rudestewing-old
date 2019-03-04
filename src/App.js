import React from 'react';

// Asset Import
import './assets/vendor/bootstrap-4.3.1-dist/css/bootstrap.css';
import './assets/vendor/fontawesome-free-5.7.2-web/css/all.css';
import './assets/css/main.scss';

import Routes from './routes/index';

import Context from './store/context/index';
import {useAuthReducer} from './store/reducers/useAuthReducer';

export default () => {
    const {auth, authDispatch} = useAuthReducer();

    const contextValue = {
        auth: auth,
        authDispatch: authDispatch
        // add more values from reducers
    }

    return (
        <React.Fragment>
            <Context.Provider value={contextValue}>
                <Routes />            
            </Context.Provider>
        </React.Fragment>
    )
}
