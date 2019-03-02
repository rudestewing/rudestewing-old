import React, {useEffect} from 'react';
import Header from './Header';

export default (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, []);

    return (
        <div> 
            <Header />
            <div id="content">
                {props.children}
            </div>
        </div>
    )
}
