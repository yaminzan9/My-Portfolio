import styled from 'styled-components';

export const Div = styled.div`
border:1px solid  rgba(255, 255, 255, 0);
padding-top: 70px;
`
export const Aboutsection = styled.div`
border:solid 0px red;
height:600px;
background: url(https://github.com/yaminzan9/My-Portfolio.io/blob/master/public/imges-public/yaminphoto.jpg?raw=true);
background-size:cover;
background-repeat: no-repeat;
`
export const AboutInfo = styled.div`
padding-top: 100px;
width: 50%;
color:white;
border:1px solid red;
@media screen and (min-width:279px){
    border :0px solid red;
    width: 70%;
}
@media screen and (min-width:600px){
    border :0px solid black;
    width: 70%;
}
@media screen and (min-width:800px){
    border :0px solid yellow;
    width: 70%;
}
@media screen and (min-width:1100px){
    border :0px solid green;
    width: 50%;
    float: right;
}
`

export const AboutTitle = styled.h2`
font-weight: bold;
font-size: 60px;
margin:10px 0px;
color:black;

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
export const Span = styled.span`
font-weight: normal;
color:rgb(73, 73, 73) ;
`
export const InfoDir = styled.h4`
font-size: 40px;
color:black;
margin-bottom: 20px;
margin-top:10px;

@media screen and (min-width:279px){
    border :0px solid red;
    font-size: 25px;
}
@media screen and (min-width:600px){
    border :0px solid black;
    font-size: 30px;
}
@media screen and (min-width:800px){
    border :0px solid yellow;
    font-size: 35px;
}
@media screen and (min-width:1100px){
    border :0px solid green;
    font-size: 40px;
}
`
export const InfoDesc = styled.p`
color: black;
margin-bottom: 15px;
line-height: 1.8;
font-size:20px;
@media screen and (min-width:279px){
    border :0px solid red;
    font-size:12px;
}
@media screen and (min-width:600px){
    border :0px solid black;
    font-size:15px;
}
@media screen and (min-width:800px){
    border :0px solid yellow;
    font-size:20px;
}
@media screen and (min-width:1100px){
    border :0px solid green;
    font-size:20px;
}
`
export const Anchor =styled.a`
text-decoration: none
`

export const Overlay =styled.div`
    border: 0px solid red;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.05);
`