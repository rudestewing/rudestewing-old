import React from 'react';

// Asset Import
import './assets/vendor/bootstrap-4.3.1-dist/css/bootstrap.css';
import './assets/vendor/fontawesome-free-5.7.2-web/css/all.css';
import './assets/css/main.scss';

import {ContextProvider} from './store/index';
import {useAuthReducer} from './store/reducers/useAuthReducer';

import Routes from './routes/index';

export default () => {
    const {auth, authDispatch} = useAuthReducer();

    return (
        <ContextProvider value={{
            auth: auth,
            authDispatch: authDispatch
        }}>
            <React.Fragment>
                <Routes />     
            </React.Fragment>
        </ContextProvider>
    )
}
