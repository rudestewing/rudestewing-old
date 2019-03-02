import React, {useState} from 'react';

export default (props) => {
    const [collections] = useState([
        {
            id: 1,
            title: 'Tester'
        },
        {
            id: 1,
            title: 'Tester'
        },
        {
            id: 1,
            title: 'Tester'
        },
        {
            id: 1,
            title: 'Tester'
        },
        {
            id: 1,
            title: 'Tester'
        },
        {
            id: 1,
            title: 'Tester'
        }
    ]);

    return (
        <div id="collection">
            {
                collections.length > 0 ?
                    collections.map((collection, index) => {
                        return (
                            <div key={index} style={{marginBottom: '90px'}}> {collection.title} </div>
                        )
                    }) :
                    <div> no collection </div>
            }
        </div>
    )
}