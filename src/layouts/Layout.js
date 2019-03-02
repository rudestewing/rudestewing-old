import React from 'react';

import Header from './Header';

export default (props) => {

    return (
        <div> 
            <Header />
            <div id="content">
                {props.children}
            </div>
        </div>
    )
}
