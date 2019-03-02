import React from 'react';

export default (props) => {
    const {id} = props.match.params;

    console.log(id);


    return (
        <div className="container">
            <div className="content-detail">
                <div className="row">
                    
                </div>
            </div>
        </div>
    )
}