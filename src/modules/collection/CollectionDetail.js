import 
    React, 
    {
        useContext,
        useEffect, 
        useState
    } 
from 'react';

import {Context} from '../../store/index';

export default (props) => {
    const {id} = props.match.params;
    const {collection, collectionDispatch} = useContext(Context);
    
    console.log(collection);

    useEffect(() => {
       
        return () => {
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
