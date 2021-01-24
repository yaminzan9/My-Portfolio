import React, { Component } from 'react';
import { findDOMNode } from "react-dom";
import $ from "jquery";
import style from './style.css';
import Logoimg1 from "../imges-import/myporty.jpg";
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin , AiFillGithub } from 'react-icons/ai';

class Logo_Header extends Component {




        componentDidMount() {
            $(".nav-links.color.dropdown-toggle").click(function() {
            $(".dropdown-menu").slideToggle();
            });

            $(".navbar-toggler").click(function() {
                $(".collapse.navbar-collapse").slideToggle();
                }); 

        }



        render () {
        return (
            <div className="container-flued" >
            <div className="navbar-content" >
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" ><img className="LogoImg" src={Logoimg1} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="items" href="#Home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="items" href="#Work">Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="items" href="#Portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="items" href="#Profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="items" href="#contact">Contact</a>
                    </li>
                    </ul>
                    <div className="midea">
                    <ul>
                    <li><a className="icon" href="https://www.facebook.com/yamin.dev.73/?viewas=" ><i><FaFacebook className="icon-content"></FaFacebook></i></a></li>
                    <li><a className="icon" href="https://www.linkedin.com/in/yamin-zanoub/" ><i><AiFillLinkedin className="icon-content" ></AiFillLinkedin></i></a></li>
                    <li><a className="icon" href="https://github.com/yaminzan9" ><i><AiFillGithub className="icon-content" ></AiFillGithub></i></a></li>
                    </ul>
                    </div>
                </div>
                </nav>
                </div>
            </div>
        )
    }
}

export default Logo_Header;