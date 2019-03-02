import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Loading from '../../layouts/Loading';

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

        }
    }, []);

    const collectionsElement = collections.length > 0 ? 
            collections.map((collection, index) => {
                return (
                    <div key={index} className="col-md-4 collection-wrapper" >
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
            }) :
            <Loading />

            
    return (
        <div className="container">
            <div id="collection">
                <div className="row">
                    {collectionsElement}
                </div>
            </div>
        </div>
    )
}