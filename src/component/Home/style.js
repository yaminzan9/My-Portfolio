import { FaBlackberry } from 'react-icons/fa';
import styled from 'styled-components';


export const HomeSection = styled.div`
    top:70px;
    width:100%;
    height: 500px;
    background: url(https://static.wixstatic.com/media/434701_911942d39bb34942a25509b9f3edca6c.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    position: relative;
    @media screen and (min-width:279px){
        height: 350px;
        
    }
    @media screen and (min-width:600px){
        height: 400px;
        
    }
    @media screen and (min-width:800px){
        height: 500px;
    }
    @media screen and (min-width:1100px){
        height: 600px;
    }
`

export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border :0px solid red;
    @media screen and (min-width:279px){
        border :0px solid red;
        width :90%;
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        width :85%;
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        width :70%;
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        width :60%;
    }
`
export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: black;
    @media screen and (min-width:279px){
        border :0px solid red;
        font-size: 15px;
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        font-size: 30px;
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        font-size: 45px;
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        font-size: 60px;
    }
`

export const HomeInfo = styled.h4`
    font-size: 35px;
    color: rgb(1, 183, 207);
    margin-bottom: 20px;
    @media screen and (min-width:279px){
        border :0px solid red;
        font-size: 14px;
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        font-size: 17px;
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        font-size: 25px;
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        font-size: 35px;
    }
`
export const HomeDesc = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color:rgb(41, 41, 41);
    margin-bottom: 20px;
    @media screen and (min-width:279px){
        border :0px solid red;
        font-size: 12px;
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        font-size: 15px;
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        font-size: 20px;
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        font-size: 25px;
    }
`

export const Span = styled.span`
    font-weight: 700;
    
    color:black;
    
`

export const HomeBtn = styled.button`
    background: rgb(1, 183, 207);
    border-radius:5px;
    color: #fff;
    font-size: 18px;
    width: 170px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: 650;
    
    &:hover {
        background: #fff;
        color : rgb(1, 183, 207);
    }
    @media screen and (min-width:279px){
        border :0px solid red;
        font-size: 12px;
        width: 110px;
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        font-size: 15px;
        width: 150px;
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        font-size: 20px;
        width: 170px;
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        font-size: 25px;
        width: 170px;
    }
`

