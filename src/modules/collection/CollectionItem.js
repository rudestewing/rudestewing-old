import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    const {collection} = props;

    return (
        <div className="col-md-4 col-sm-12 collection-wrapper" >
            <Link to={`/collection/detail/${collection.id}`} className="collection-item" >
                <div className="thumbnail" style={{
                    backgroundImage: `url(${collection.thumbnail})`
                }} ></div>
                <div className="overlay">
                    <div className="title"> {collection.title} </div>
                </div>
            </Link>
        </div>
    )
}