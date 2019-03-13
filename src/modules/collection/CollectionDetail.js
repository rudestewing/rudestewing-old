import 
    React, 
    {useEffect, useState} 
from 'react';

import {collectionState} from './state';
import {memberState} from './state';

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
                            <h4 id="title">
                                {collection.title}
                            </h4>
                            <a target="_blank" rel="noopener noreferrer" href={collection.url}>
                                <img id="thumbnail" src={collection.thumbnail} alt=""/>
                            </a>
                            <div id="body">
                                <p> {collection.body} </p>
                            </div>
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
