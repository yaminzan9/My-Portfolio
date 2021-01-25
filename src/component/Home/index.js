import React from 'react';
import {HomeSection , HomeTitle ,HomeInformation ,HomeDesc ,Span ,HomeBtn ,HomeInfo } from './style.js';

function Home () {
    return (
    <div id="Home">
    <HomeSection>
    <div className="container">
            <HomeInformation> 
                <HomeTitle>Yamin zanoub</HomeTitle>
                <HomeInfo>Front-End Developer</HomeInfo>
                <HomeDesc>
                I'm a professional <Span>Front-End Developer</Span> and software engineer, specialised in creating modern and responsive websites equipped with the best features.
                Let us work together.
                Thanks.
                    
                </HomeDesc>
                <a href="https://api.whatsapp.com/send?phone=60189610861&fbclid=IwAR00GIld1iDH_0g5FvJfF38p1SWfrbjlJEyl7tJgOUtCNVedGJq0GgU9Y7Y" ><HomeBtn>WhatsApp</HomeBtn></a>
            </HomeInformation>
        </div>
    </HomeSection>
    </div>
    )
}

export default Home 
