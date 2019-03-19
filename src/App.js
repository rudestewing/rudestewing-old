import React from 'react';

// Asset Import
import './assets/vendor/bootstrap-4.3.1-dist/css/bootstrap.css';
import './assets/vendor/fontawesome-free-5.7.2-web/css/all.css';
import './assets/css/main.scss';

import Routes from './routes/index';
import {Provider} from 'react-redux';
import store from './store/index';

export default () => {
    return (
        <Provider store={store}>
            <React.Fragment>
                <Routes />     
            </React.Fragment>
        </Provider>
    )
}
