import React from 'react';
import {HomeSection , HomeTitle ,HomeInformation ,HomeDesc ,Span ,HomeBtn ,HomeInfo , Hw} from './style.js';
function Home () {
    return (
    <div id="Home">
    <HomeSection>
    <div className="container">
            <HomeInformation> 
                <HomeTitle>Yamin zanoub</HomeTitle>
                <HomeInfo>Front-End Developer</HomeInfo>
                <HomeDesc>
                    I am a professional <Span>Front-End Developer</Span> and Software Engineer creating modern and resposive designs to Web in the best features.
                     Let us work together. Thanks .
                </HomeDesc>
                <HomeBtn>WhatsApp</HomeBtn>
            </HomeInformation>
        </div>
    </HomeSection>
    </div>
    )
}

export default Home 
