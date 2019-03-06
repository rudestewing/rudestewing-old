import React, {useState, useEffect} from 'react';
import HomeVector from '../../assets/images/home-vector.png';

import {connect} from 'react-redux';
import http from '../../utilities/http/index';


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, null)((props) => {
    const person = {
        name: 'rudestewing',
        age: 23,
        gender: 'male'
    }

    console.log(http);


    const [data] = useState({
        socialMedias: [
            {
                url: 'https://www.linkedin.com/in/rudi-setiawan-a2820217a/',
                faIcon: 'linkedin'
            },
            {
                url: 'https://github.com/rudestewing',
                faIcon: 'github'
            },
            {
                url: 'https://twitter.com/_rudestewing',
                faIcon: 'twitter'
            },
            {
                url: 'https://www.instagram.com/_rudestewing/',
                faIcon: 'instagram'
            }
        ]
    });

    useEffect(() => {
        
    }, []);

    return (
        <div id="home">
            <img id="home-vector" src={HomeVector} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h4> Hello ! </h4>
                        <h6 style={{marginBottom: '20px'}}> thank you for visiting my page </h6>
                        <p> Rudi Setiawan </p>
                        {/* <p> an ordinary guy who loves Javascript & Laravel  </p> */}
                        <p> and I do web development  </p>
                    </div>
                </div>

                <div id="social-media">
                <div className="row">
                    <div  className="col-md-12 col-sm-12">
                        <ul>
                            {
                                data.socialMedias.length > 0 ?
                                    data.socialMedias.map((item, index) => {
                                        return (
                                            <li key={index}> 
                                                <a rel="noopener noreferrer"  target="_blank" href={item.url}> 
                                                    <i className={`fab fa-${item.faIcon}`}></i> 
                                                </a>
                                            </li>
                                        )
                                    }) :
                                    ('')
                            }
                        </ul>
                    </div>
                </div>
            </div>
            </div>            
        </div>
    )
});