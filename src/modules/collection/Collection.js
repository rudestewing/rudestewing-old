import React, {useState, useEffect, useContext} from 'react';
import Loading from '../../layouts/Loading';
import CollectionItem from './CollectionItem';

import { useCollectionReducer } from './reducer/useCollectionReducer';

export default (props) => {
    const {collection, collectionDispatch} = useCollectionReducer();

    useEffect(() => {
        var fetchData = setTimeout(() => {
            collectionDispatch({
                type: 'FETCH_COLLECTION'
            });
        }, 500);

        setTimeout(() => {
            console.log(collection);
        }, 1500);
        
        return () => {
            clearTimeout(fetchData);
        }
    }, []);

    return (
        <div id="collection" className="container">
            <div className="row">
                {
                    collection.length > 0 ? 
                    collection.map((collection, index) => {
                        return (
                            <CollectionItem key={index} collection={collection} />
                            )
                        }) :
                        <Loading />
                    }
            </div>
        </div>

    )
}