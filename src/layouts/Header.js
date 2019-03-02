import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default ()  => {

    useEffect(() => {
        var elHeader = document.getElementById('header');
        var headerTop = elHeader.offsetTop;
        var headerHeight = elHeader.offsetHeight;
        var currentScrollY = 0;
        var lastScrollY = 0;

        function onScroll() {
            currentScrollY = window.pageYOffset;

            if(currentScrollY < lastScrollY) {
                showHeader();
                if(currentScrollY >= headerHeight) {
                    setFixed();
                }
            } else if(currentScrollY > lastScrollY) {
                if(currentScrollY >= headerHeight) {
                    hideHeader();
                    setTimeout(() => {
                        setAbsolute();
                    }, 300);
                }
            }

            lastScrollY = currentScrollY;
        }

        function setFixed() {
            elHeader.classList.remove('absolute');
            elHeader.classList.add('fixed');
        }

        function setAbsolute() {
            elHeader.classList.remove('fixed');
            elHeader.classList.add('absolute');
        }
        
        function showHeader() {
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
        <div id="header" className="">
            <div className="container">
                <Link id="logo" to="/">
                    rudestewing
                </Link>
                <div id="nav">
                    <ul>
                        <li> <Link to="/"> Home </Link> </li>
                        <li> <Link to="/collection"> Collection </Link> </li>
                        <li> <Link to="/about"> About Me </Link> </li>
                        <li> <Link to="/contact"> Contact </Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}