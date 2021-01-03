import React from 'react'
import Contact from '../Contact';
import About from './../About/index';
import Footer from './../Footer';
import Home from './../Home';
import Portoflio from './../Portoflio';
import Profile from './../Profile';
import SocialMedia from './../SocialMedia';
import Work from './../Work';
import Logo_Header from './../Header.js';
import Data from '../../data.json';

function Index() {
    return (
        <div>
            
            <Home/>
            <Work/>
            <Portoflio/>
            <Profile/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Index
