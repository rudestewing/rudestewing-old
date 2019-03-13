import React, {useState} from 'react';
import Loading from '../../layouts/Loading';

import ARticleItem from './ArticleItem';

export default () => {
    const [articles] = useState([]);

    return (
        <div id="article" className="container">
            <div className="row">
                

            
                {/* {
                    articles.length > 0 ?
                        articles.map((article, index) => {
                            return (
                                <div className="col-md-6 article-wrapper">
                                    <div className="article-item">
                                        
                                    </div>
                                </div>  
                            )
                        }) :
                        <Loading />
                } */}
            </div>
        </div>
    )
}