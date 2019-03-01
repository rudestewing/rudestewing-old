import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import HomeVector from '../../assets/images/home-vector.png';

export default (props) => {
    console.log(props);

    return (
        <div id="home">
            <img id="home-vector" src={HomeVector} alt=""/>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h4> Hello ! </h4>
                    <h6> Welcome to my personal page </h6>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis nam quas, quo accusantium error nihil exercitationem. Autem iusto illum dolorum totam voluptas ipsam maxime, recusandae, saepe hic aut, quibusdam non. </p>
                </div>
            </div>

            <div id="social-media">
                <div className="row">
                    <div  className="col-md-12 col-sm-12">
                        <ul>
                            <li> <a target="_blank" href="https://www.linkedin.com/in/rudi-setiawan-a2820217a/"> <i className="fab fa-linkedin"></i> </a> </li>
                            <li> <a target="_blank" href="https://github.com/rudestewing"> <i className="fab fa-github"></i> </a> </li>
                            <li> <a target="_blank" href="https://twitter.com/_rudestewing"> <i className="fab fa-twitter"></i> </a> </li>
                            <li> <a target="_blank" href="https://www.instagram.com/_rudestewing/"> <i className="fab fa-instagram"></i> </a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}