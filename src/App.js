import React from 'react';

// Asset Import
import './assets/vendor/bootstrap-4.3.1-dist/css/bootstrap.css';
import './assets/vendor/fontawesome-free-5.7.2-web/css/all.css';
import './assets/css/main.scss';

import Routes from './routes/index';

import {AuthContext} from './store/context/index';
import {useAuthReducer} from './store/context/reducers/useAuthReducer';

import {Provider} from 'react-redux';
import store from './store/redux/index';

export default () => {
    const {auth, authDispatch} = useAuthReducer();

    return (
        <React.Fragment>
            <Provider store={store}>
                <AuthContext.Provider value={{
                    auth: auth,
                    authDispatch: authDispatch
                }}>
                    <Routes />     
                </AuthContext.Provider>
            </Provider>

        </React.Fragment>
    )
}
