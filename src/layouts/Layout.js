import React from 'react';

import Header from './Header';

export default (props) => {

    return (
        <div id="layout">
            <Header />
            <div id="content" className="container">
                {props.children}
            </div>
        </div>
    )
}
