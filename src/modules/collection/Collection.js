import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Loading from '../../layouts/Loading';
import CollectionItem from './CollectionItem';

export default (props) => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setCollections([
                {
                    id: 1,
                    title: 'IIX Management',
                    description: '',
                    thumbnail: 'https://cdn.dribbble.com/users/221507/screenshots/5917598/hungry-dev-full-sheet_4x.jpg',
                },
                {
                    id: 2,
                    title: 'SKK Migas',
                    description: '',
                    thumbnail: 'https://cdn.dribbble.com/users/221507/screenshots/5917598/hungry-dev-full-sheet_4x.jpg',
                },
                {
                    id: 3,
                    title: 'foto paragames 2018',
                    description: '',
                    thumbnail: 'https://cdn.dribbble.com/users/221507/screenshots/5917598/hungry-dev-full-sheet_4x.jpg',
                },
                {
                    id: 4,
                    title: 'Payroll Program',
                    description: '',
                    thumbnail: 'https://cdn.dribbble.com/users/221507/screenshots/5917598/hungry-dev-full-sheet_4x.jpg',
                }
            ]);
        }, 2000);
        return () => {
            console.log('component unmount');
        }
    }, []);

    return (
        <div className="container">
            <div id="collection">
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
        </div>
    )
}