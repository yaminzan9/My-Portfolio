import styled from 'styled-components';

export const ProfileTitle =styled.div`
    font-size: 60px;
    text-align: center;
    text-transform: uppercase; 
`
export const Profile_skills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`
export const Profile_skills_profile = styled.div`
width: 50%;
float: left;
@media screen and (min-width:279px){
    border :0px solid red;
    width: 100%;
    padding:20px;
}
@media screen and (min-width:600px){
    border :0px solid black;
    width: 100%;
    padding:20px;
}
@media screen and (min-width:800px){
    border :0px solid yellow;
    width: 100%;
    padding:20px;
}
@media screen and (min-width:1100px){
    border :0px solid green;
    width: 50%;
    padding:20px;
}
`

export const Profile_list = styled.ul`
list-style: none;
margin-top: 40px;
padding: 0;
border :solid 0px red;
`

export const Profile_item = styled.li`
margin-bottom: 8px;
list-style: none;
`

export const Span = styled.span`
display: inline-block;
width: 100px;
font-weight: bold
`

export const Span_web = styled.p`
font-weight: normal;
color: rgb(1, 183, 207);
`
export const Skills = styled.div`
width: 50%;
float: left;
padding:20px;
@media screen and (min-width:279px){
    border :0px solid red;
    width: 100%;
}
@media screen and (min-width:600px){
    border :0px solid black;
    width: 100%;
}
@media screen and (min-width:800px){
    border :0px solid yellow;
    width: 100%;
}
@media screen and (min-width:1100px){
    border :0px solid green;
    width: 50%;
}
`

export const Skills_desc = styled.p`
font-size: 20px;
font-weight: 600;
color: black;
line-height: 1.5;
margin-bottom: 20px;

`

export const Skills_bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const Skills_bar_title = styled.span`
float: left;
`
export const Skills_bar_perc = styled.span`
float: right;
margin-right: 0px;
`


export const Skills_bar_parent = styled.div`
    height: 1px;
    clear: both;
    background: rgb(214, 214, 214);
    position: relative;
    top: 2px;
` 
export const Skills_bar_parent_span = styled.span`
background:rgb(1, 183, 207);
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0
`

export const Skills_bar_parent_sp1 = styled.span`
opacity: 0;


`
export const Profile_title = styled.h2`
    font-size: 60px; 
    text-transform: uppercase;
    margin-bottom: 20px;
    @media screen and (min-width:279px){
        border :0px solid red;
        font-size: 40px; 
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        font-size: 45px; 
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        font-size: 50px; 
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        font-size: 60px; 
    }
`

export const Profile_skills_title = styled.h2`
    font-size: 60px; 
    margin-bottom:20px;
    text-transform: uppercase;
    @media screen and (min-width:279px){
        border :0px solid red;
        font-size: 40px; 
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        font-size: 45px; 
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        font-size: 50px; 
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        font-size: 60px; 
    }
`

export const Profile_title_span = styled.span`
font-weight: normal;
`

export const Profile_skills_title_span = styled.span`
font-weight: normal;
`
export const PorfilePart = styled.div`
font-weight: bold;
`
export const Div = styled.div`
display: block;

    
}
`


export const Scour = styled.p`
    border: 0px solid red;
    border-radius: 7.5px;
    width: 15px;
    height: 15px;
    background-color: rgb(1, 183, 207);
    transition: background-color 0.5s ;
    display: inline-block;
    margin: 5px;
    
`

export const Scour1 = styled.span`
    border: 0px solid red;
    border-radius: 7.5px;
    width: 15px;
    height: 15px;
    background-color: rgb(202, 202, 202);
    display: inline-block;
    margin: 5px;
    
`

export const HopImg =styled.img`
width:100px;
border: solid 0px red;
padding:10px;
margin:10px;
`