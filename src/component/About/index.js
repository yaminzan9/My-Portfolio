import React from 'react';
import {AboutInfo , AboutTitle , Aboutsection , Anchor , InfoDesc , InfoDir , Span , Overlay} from './style.js';


function About() {
    return (
        <Aboutsection>
            <Overlay>
            <div class="container">
                <AboutInfo>
                    <AboutTitle><Span>This is</Span> Me</AboutTitle>
                    <InfoDir>Front-End Developer</InfoDir>
                    <InfoDesc>
                    I am a professional Front-End Developer and Software Engineer creating modern and resposive designs to Web in the best features.
                    </InfoDesc>
                    <InfoDesc>
                        
                    </InfoDesc>
                </AboutInfo>
            </div>
            </Overlay>
        </Aboutsection>
    )
}

export default About;
