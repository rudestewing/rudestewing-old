import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Loading from '../../layouts/Loading';

import ArticleItem from './ArticleItem';

const withUser =  (WrappedComponent) => {
    return () => {
        return (
            <div style={{
                backgroundColor: 'lightblue'
            }}>
                <WrappedComponent />
            </div>
        )
    }
}


export default 
withUser(
    (props) => {
        console.log(props);
        const [articles] = useState([]);

        return (
            <div id="article" className="container">
                <div className="row">
                    <ArticleItem />

                </div>
            </div>
        )
    }
);