import 
    React, 
    {useEffect, useState} 
from 'react';

import {collectionState} from './state';

export default (props) => {
    const {id} = props.match.params;
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        const selectedCollection = collectionState.find((item) => {
            return item.id == id;
        });
        setCollection(selectedCollection);

        return () => {
            setCollection(null);
        }
    }, []);

    return (
        <div className="container">
            <div className="content-detail" >
                {
                    collection != null ? (
                        <React.Fragment>
                            <h4 className="title">
                                {collection.title}
                            </h4>
                            <img id="thumbnail" src={collection.thumbnail} alt=""/>
                            <p className="body">
                                {collection.body}
                            </p>
                        </React.Fragment>                        
                    ) : (
                        <p>
                            no content
                        </p>
                    ) 
                }
            </div>
        </div>
    )
}
