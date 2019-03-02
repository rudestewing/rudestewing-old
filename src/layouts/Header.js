import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default ()  => {

    useEffect(() => {
        var elHeader = document.getElementById('header');
        var headerHeight = elHeader.offsetHeight;
        var currentScrollY = 0;
        var lastScrollY = 0;

        function onScroll() {
            currentScrollY = window.pageYOffset;
            // console.log(currentScrollY);
            
            if(currentScrollY < lastScrollY) {
                // console.log('scroll up');
                if(currentScrollY >= headerHeight) {
                    showHeaderHeader();
                    setFixed();
                }
            } else if(currentScrollY > lastScrollY) {
                // console.log('scroll down');
                if(currentScrollY >= headerHeight) {
                    hideHeader();
                }
            }

            if(currentScrollY == 0 ) {
                // console.log('asolole');
                setAbsoluteHeader();
                elHeader.classList.remove('sticky');
                elHeader.classList.remove('hide');
            }
            lastScrollY = currentScrollY;
        }

        function setFixed() {
            elHeader.classList.remove('absolute');
            elHeader.classList.add('fixed');
        }

        function setAbsoluteHeader() {
            elHeader.classList.remove('fixed');
            elHeader.classList.add('absolute');
        }
        
        function showHeaderHeader() {
            elHeader.classList.remove('hide');
            elHeader.classList.add('sticky');
        }

        function hideHeader() {
            elHeader.classList.remove('sticky');
            elHeader.classList.add('hide');
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            console.log('header unmount');

        }
    }, []);

    return (
        <div id="header" className="absolute">
            <div className="container">
                <Link id="logo" to="/">
                    rudestewing
                </Link>
                <div id="nav">
                    <ul>
                        <li> <Link to="/"> Home </Link> </li>
                        <li> <Link to="/collection"> Collections </Link> </li>
                        <li> <Link to="/article"> Articles </Link> </li>
                        <li> <Link to="/about"> About Me </Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}