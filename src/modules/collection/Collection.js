import React, {useState, useEffect, useContext} from 'react';
import Loading from '../../layouts/Loading';
import CollectionItem from './CollectionItem';

import {collectionState} from './state';
import {AuthContext} from '../../store/context/index';

export default (props) => {
    const [collections, setCollections] = useState([]);
    const {auth} = useContext(AuthContext);

    useEffect(() => {
        var fetchData = setTimeout(() => {
            setCollections(collectionState);
        }, 500);
        
        return () => {
            clearTimeout(fetchData);
        }
    }, []);

    return (
        <div id="collection" className="container">
            <div className="row">
                {
                    collections.length > 0 ? 
                    collections.map((collection, index) => {
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