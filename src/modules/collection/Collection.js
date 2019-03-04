import React, {useState, useEffect, useContext} from 'react';
import Loading from '../../layouts/Loading';
import CollectionItem from './CollectionItem';

import imgSkkMigas from '../../assets/images/www.skkmigas.go.id.png';
import imgMyIix from '../../assets/images/my.iix.net.id.png';
import imgPortalHigen from '../../assets/images/portal-higen.png';
import imgReconcile from '../../assets/images/reconcile-apjii.png';
import imgNoImage from '../../assets/images/no-image.png';

import Context from '../../store/context/index';

export default (props) => {
    const [collections, setCollections] = useState([]);
    const {auth} = useContext(Context);
    
    console.log(auth);

    useEffect(() => {
        var fetchData = setTimeout(() => {
            setCollections([
                {
                    id: 1,
                    title: 'HR System',
                    description: '',
                    thumbnail: imgNoImage,
                },
                {
                    id: 2,
                    title: 'IIX Management',
                    description: '',
                    thumbnail: imgMyIix,
                },
                {
                    id: 3,
                    title: 'foto paragames 2018',
                    description: '',
                    thumbnail: imgNoImage,
                },
                {
                    id: 4,
                    title: 'SKK Migas',
                    description: '',
                    thumbnail: imgSkkMigas,
                },
                {
                    id: 5,
                    title: 'APJII Member Reconcile',
                    description: '',
                    thumbnail: imgReconcile
                },
                {
                    id: 6, 
                    title: 'VoIP Report Web Base',
                    description: '',
                    thumbnail: imgPortalHigen
                },
            ]);
        }, 2000);
        
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