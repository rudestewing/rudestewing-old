import React from 'react';
import {Link} from 'react-router-dom';


export default ()  => {

    return (
        <div id="header">
            <div id="logo">
                rudestewing
            </div>
            <div id="nav">
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/collection"> Collection </Link> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
                </ul>
            </div>
        </div>
    )
}