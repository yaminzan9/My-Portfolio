import React from 'react';
import { Link } from 'react-router-dom';
import { Navbarsection , Logo , LogoText , Ullist , ListItem , Anchor , ImgLogo } from './style.js';
function Navbar () {
    return (
        <Navbarsection>
            
        <div className="container">
            
            <Logo>
                <LogoText><ImgLogo src="images/yaminlogo.jpg" /></LogoText>
            </Logo>
            
            
            <Ullist>
                <ListItem><Anchor href="#Work">Work</Anchor></ListItem>
                <ListItem><Anchor href="#Portfolio">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#Profile">Profile</Anchor></ListItem>
                <ListItem><Anchor href="#Home">back Home</Anchor></ListItem>
                <ListItem><Link to="/" ><Anchor>Home</Anchor></Link></ListItem>
                <ListItem><Link to="/Contact"><Anchor>Contact</Anchor></Link></ListItem>
            </Ullist>
            
        </div>
        
    </Navbarsection>
    )
}

export default Navbar 
