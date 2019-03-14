import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Loading from '../../layouts/Loading';

import ArticleItem from './ArticleItem';

export default () => {
    const [articles] = useState([]);

    return (
        <div id="article" className="container">
            <div className="row">
                <ArticleItem />
            </div>
        </div>
    )
}