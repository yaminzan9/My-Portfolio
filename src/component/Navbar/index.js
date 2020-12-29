import React from 'react';
import { Link } from 'react-router-dom';
import { Navbarsection , Logo , LogoText , Ullist , ListItem , Anchor , ImgLogo } from './style.js';
import Logoimg1 from "../imges-import/myporty.jpg";
function Navbar () {    
    return (
        <Navbarsection>
            
        <div className="container">
            
            <Logo>
                <LogoText><ImgLogo src={Logoimg1} /></LogoText>
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
