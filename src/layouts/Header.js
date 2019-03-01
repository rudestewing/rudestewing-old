import React from 'react';
import {Link} from 'react-router-dom';

export default ()  => {

    return (
        <div id="header" className="container">
            <Link id="logo" to="/">
                rudestewing
            </Link>
            <div id="nav">
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About Me </Link> </li>
                    <li> <Link to="/collection"> Collection </Link> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
                </ul>
            </div>
        </div>
    )
}