import React from 'react';

// Asset Import
import './assets/css/main.scss';
import './assets/vendor/bootstrap-4.3.1-dist/css/bootstrap.css';
import './assets/vendor/fontawesome-free-5.7.2-web/css/all.css';

import Routes from './routes/index';


export default () => {


    return (
        <div id="app">
            <Routes />            
        </div>
    )
}