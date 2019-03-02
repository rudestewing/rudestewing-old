import React, {useState, useEffect} from 'react';
import HomeVector from '../../assets/images/home-vector.png';

export default (props) => {
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
        console.log('component loaded');
        return () => {
            console.log('component unmount');
        }
    }, []);

    console.log(data.message)

    return (
        <div id="home">
            <img id="home-vector" src={HomeVector} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h4> Hello ! </h4>
                        <h6 style={{marginBottom: '20px'}}> thank you for visiting my page </h6>
                        <p> <i> Rudi Setiawan </i> </p>
                        <p> an ordinary guy who loves Javascript & Laravel  </p>
                        <p> 
                            {/* {
                                data.message ?
                                    data.message.split('\n').map((item, index) => {
                                        return (
                                            <p key={index}> {item}  </p>
                                        )
                                    }) : 
                                    '' 
                            } */}
                        </p>
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
}