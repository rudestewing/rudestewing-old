import React from 'react';

// Asset Import
import './assets/vendor/bootstrap-4.3.1-dist/css/bootstrap.css';
import './assets/vendor/fontawesome-free-5.7.2-web/css/all.css';
import './assets/css/main.scss';

import Routes from './routes/index';

import {AuthContext} from './store/context/index';
import {useAuthReducer} from './store/context/reducers/useAuthReducer';

export default () => {
    const {auth, authDispatch} = useAuthReducer();

    return (
        <React.Fragment>
            <AuthContext.Provider value={{
                auth: auth,
                authDispatch: authDispatch
            }}>
                <Routes />     
            </AuthContext.Provider>
        </React.Fragment>
    )
}
