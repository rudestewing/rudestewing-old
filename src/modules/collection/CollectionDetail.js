import React from 'react';

export default (props) => {
    const {id} = props.match.params;

    return (
        <div className="container">
            <div className="content-detail" >
                collection detail {id}
            </div>
        </div>
    )
}
