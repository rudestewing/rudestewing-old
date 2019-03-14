import React from 'react';
import {Link} from 'react-router-dom';
import imgNoImage from '../../assets/images/no-image.png';

export default (props) => {

    return (
        <Link to="/article/detail/12312" className="article-item">
            <img id="thumbnail" src={imgNoImage} alt=""/>
            <div id="text">
                <h5 className="title">
                    Lorem ipsum Title 
                </h5>
                <p id="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet eos soluta exercitationem placeat tempore maiores velit iure facere obcaecati! Harum minima numquam nobis aut et fugit? Deleniti, impedit animi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet eos soluta exercitationem placeat tempore maiores velit iure facere obcaecati! Harum minima numquam nobis aut et fugit? Deleniti, impedit animi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet eos soluta exercitationem placeat tempore maiores velit iure facere obcaecati! Harum minima numquam nobis aut et fugit? Deleniti, impedit animi?
                </p>
                <small id="date">
                    2012 - 12 -12
                </small>
            </div>
        </Link>
    );
}