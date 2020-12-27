import React from 'react';
import {FooterSeaction , FooterDesc , List , Li , Icon} from './style.js';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin , AiFillGithub } from 'react-icons/ai';


function Footer () {
    return (
        <FooterSeaction>
            <List>
            <Li><Icon><FaFacebook></FaFacebook></Icon></Li>
            <Li><Icon><AiFillLinkedin></AiFillLinkedin></Icon></Li>
            <Li><Icon><AiFillGithub></AiFillGithub></Icon></Li>
            </List>
            <FooterDesc> yaminzan &copy; 2018 profile </FooterDesc>
        </FooterSeaction>
    )
}

export default Footer 
