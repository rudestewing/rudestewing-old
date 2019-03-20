import React, {useState, useEffect, useContext} from 'react';
import Loading from '../../layouts/Loading';
import CollectionItem from './CollectionItem';

import {collectionState} from './state';

import {connect} from 'react-redux';
import {addToCart} from './actions';

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart())
    }
}

const Collection = (props) => {
    const [collections, setCollections] = useState([]);
    const {addToCart} = props;

    useEffect(() => {
        var fetchData = setTimeout(() => {
            setCollections(collectionState);
        }, 500);
        
        return () => {
            clearTimeout(fetchData);
        }
    }, []);

    function handleClick() {
        addToCart(1);

    }

    return (
        <div id="collection" className="container">
        {/* <button onClick={handleClick}> add to cart </button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Collection)