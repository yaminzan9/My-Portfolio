import React , {useState ,useEffect} from 'react';
import axios from 'axios';
import {Profile_skills , Profile_skills_profile , Profile_list , Profile_item , Span , Span_web , Skills , Skills_desc ,
    Skills_bar , Skills_bar_title , Skills_bar_perc , Skills_bar_parent , Skills_bar_parent_span , Skills_bar_parent_sp1 ,
    Skills_bar_parent_sp2 , Skills_bar_parent_sp3 , Profile_title , Profile_skills_title , Profile_title_span ,
    Profile_skills_title_span , PorfilePart , Scour ,Div , Scour1} from './style';
import { GoMarkGithub } from "react-icons/go";
import {GiSkills} from "react-icons/gi";
import Data from '../../data.json';



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
        <div id="Profile" >
        <Profile_skills>
            <div  className="container">
                <Profile_skills_profile>
                    <Profile_title><Profile_title_span>My </Profile_title_span>Profile</Profile_title>
                    <Profile_list>
                        <Profile_item>
                            <Span>Name</Span>
                            Yamin Zanoub
                        </Profile_item>
                        <Profile_item>
                            <Span>Birthday</Span>
                            06/09/1994
                        </Profile_item>
                        <Profile_item>
                            <Span>Address</Span>
                            kuala lumpor
                        </Profile_item>
                        <Profile_item>
                            <Span>Phone</Span>
                            0060189610861
                        </Profile_item>
                        <Profile_item>
                            <Span>Email</Span>
                            yaminzan@outlook.com
                        </Profile_item>
                        <Profile_item>
                        <GoMarkGithub></GoMarkGithub>
                            <Span>GetHub</Span>
                            <Span_web>https://github.com/yaminzan</Span_web>
                        </Profile_item>
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
                
            </div>
        </Profile_skills>
        </div>
        
    )
}

export default Profile 
