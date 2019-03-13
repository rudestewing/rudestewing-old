import React, {useState} from 'react';
import Loading from '../../layouts/Loading';

import ArticleItem from './ArticleItem';
import imgNoImage from '../../assets/images/no-image.png';

export default () => {
    const [articles] = useState([]);

    return (
        <div id="article" className="container">
            <div className="row">
                <div className="article-item">
                    <img id="thumbnail" src={imgNoImage} alt=""/>
                </div>
            </div>
        </div>
    )
}