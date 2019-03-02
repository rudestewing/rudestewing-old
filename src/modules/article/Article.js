import React, {useState} from 'react';
import Loading from '../../layouts/Loading';

export default () => {
    const [articles, setArticles] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    return (
        <div className="container">
            <div id="article">
                <div className="row">
                    {
                        articles.length > 0 ?
                            articles.map((article, index) => {
                                    return (
                                        <div className="col-md-6 article-wrapper">
                                            <div className="article-item">
                                                Hello
                                            </div>
                                        </div>  
                                    )
                                }) :
                                <Loading />
                    }
                </div>
            </div>
        </div>
    )
}