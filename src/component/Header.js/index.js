import React, { Component } from 'react';
import { findDOMNode } from "react-dom";
import $ from "jquery";
import {Link , NavLink} from "react-router-dom";
import style from './style.css';

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
            <nav class="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" ></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-links color" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-links color " to="/OurService">Our Service</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-links color disabled" to="/AboutUs">AboutUs</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-links color disabled" to="/ContactBag">Contact</Link>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>
                </div>
            </div>
        )
    }
}

export default Logo_Header;