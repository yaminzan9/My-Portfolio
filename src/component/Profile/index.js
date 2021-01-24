import React , {useState ,useEffect} from 'react';
import axios from 'axios';
import {Profile_skills , Profile_skills_profile , Profile_list , Profile_item , Span , Span_web , Skills , Skills_desc ,
    Skills_bar , Skills_bar_title , Skills_bar_perc , Skills_bar_parent , Skills_bar_parent_span , Skills_bar_parent_sp1 ,
    Skills_bar_parent_sp2 , Skills_bar_parent_sp3 , Profile_title , Profile_skills_title , Profile_title_span ,
    Profile_skills_title_span , PorfilePart , Scour ,Div , Scour1 ,ProfileTitle ,HopImg} from './style';
import { GoMarkGithub } from "react-icons/go";
import {GiSkills} from "react-icons/gi";
import Data from '../../data.json';
import Photo from "../imges-import/icons-0.png";
import Photo1 from "../imges-import/icons-01.png";
import Photo2 from "../imges-import/icons-02.png";

function Profile () {

    const [ pro , setPro] = useState([])

    useEffect ( () => {
        axios.get('data.json').then( res => { setPro(res.data.profil)})
    }, [] )

    const ProList = Data.profil.map( (proItem) => {
        return (
            <PorfilePart  key={proItem.id} >
                <pro_skills_title>{proItem.title}</pro_skills_title>
                <Skills_bar_perc>{proItem.perc}</Skills_bar_perc>
                <Skills_bar_parent>
                    <Skills_bar_parent_span>
                        <Skills_bar_parent_sp1 secound={proItem.id}>
                        {proItem.parent}
                        </Skills_bar_parent_sp1>
                    </Skills_bar_parent_span>
                </Skills_bar_parent>
            </PorfilePart>
        )
    })





    return (
        <div >
        <Profile_skills>
        <ProfileTitle><Span>My</Span>profile</ProfileTitle>
            <div  className="container">
                <Profile_skills_profile>
                    <Profile_title>Education</Profile_title>
                    <Profile_list>
                   
                        <Profile_item>
                        <p> Damascus University/Damascus,</p>
                        <p> Syria Diploma in Software Engineering </p>
                        </Profile_item>

                        <Profile_title>Experience</Profile_title>
                        <Profile_item>
                        11/2014 – 12/2015 Back End Developer at Wasilah Magazine (Damascus, Syria) Achievements: ⦁ Front-End development using JavaSript , Html, CSS and JQuery. ⦁ Landing pages Design for potential customers ⦁ Website creation using Bootstrap ⦁ Graphic Design, Photoshop, and 3D max 
                        </Profile_item>
                        <Profile_title>Languages</Profile_title>
                        <Profile_item>
                        <Span>arabic</Span>
                        <Div><Scour></Scour><Scour></Scour><Scour></Scour><Scour></Scour><Scour></Scour>
                        <Scour></Scour><Scour></Scour><Scour></Scour><Scour></Scour><Scour></Scour>
                        </Div>
                        <Span>english</Span>
                        <Div><Scour></Scour><Scour></Scour><Scour></Scour><Scour></Scour><Scour></Scour>
                        <Scour></Scour><Scour></Scour><Scour></Scour><Scour1></Scour1><Scour1></Scour1>
                        </Div>
                        <Span>malay</Span>
                        <Div><Scour></Scour><Scour></Scour><Scour1></Scour1><Scour1></Scour1><Scour1></Scour1>
                        <Scour1></Scour1><Scour1></Scour1><Scour1></Scour1><Scour1></Scour1><Scour1></Scour1>
                        </Div>
                        </Profile_item>
                    </Profile_list>
                </Profile_skills_profile>
                
                
                <Skills> 
                <Profile_skills_title><Profile_skills_title_span>my </Profile_skills_title_span>skills</Profile_skills_title>
                    <Skills_desc>
                    I got those experiences through my work with different people and from my mistakes.
                    </Skills_desc>
                    {ProList}
                </Skills>
                
                <Profile_title>Hobbies</Profile_title>
                <Profile_item>
                    
                        
                        <HopImg src={Photo1}/>
                        <HopImg src={Photo2}/>
                        <HopImg src={Photo}/>
                        <p> Syria Diploma in Software Engineering </p>
                </Profile_item>
            </div>
        </Profile_skills>
        </div>
        
    )
}

export default Profile 
