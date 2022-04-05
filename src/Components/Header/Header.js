import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                <Link to='/' id='contentHoverEffect1'>HOME <span id='navBottomContent1'></span></Link>
                <Link to='/reviews' id='contentHoverEffect2'>REVIEWS <span id='navBottomContent2'></span></Link>
                <Link to='/dashboard' id='contentHoverEffect3' >DASHBOARD <span id='navBottomContent3'></span></Link>
                <Link to='/blogs' id='contentHoverEffect4' >BLOGS <span id='navBottomContent4'></span></Link>
                <Link to='/about' id='contentHoverEffect5'>ABOUT <span id='navBottomContent5'></span></Link>
            </nav>
        </div>
    </header>
    );
};

export default Header;