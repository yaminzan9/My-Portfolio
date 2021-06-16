import styled from 'styled-components';

export const Mg = styled.div`

border :1px solid #0000; 
`
export const WorkSection = styled.div`
    padding-top:20px;
    overflow: hidden;
    background: white;
    margin-top:70px;
    border:solid 1px red;
`

export const WorkTitle = styled.h2`
    font-size: 60px;
    text-align: center;
    text-transform: uppercase; 
    @media screen and (min-width:279px){
        border :0px solid red;
        font-size: 45px;
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        font-size: 50px;
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        font-size: 60px;
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        font-size: 60px;
    }
`

export const Span = styled.span`
    font-weight: normal
`

export const WorkPart = styled.div`
    width: 30%;
    float: left;
    height: auto;
    border: 1px solid red;
    box-sizing: border-box;
    text-align: center;
    @media screen and (min-width:279px){
        border :1px solid red;
        width: 90%;
        padding-top: 30px;
        margin-left: 5%;
    }
    @media screen and (min-width:600px){
        border :1px solid black;
        width: 40%;
        height: 250px;
        padding-top: 30px;
        margin: 10px 5% 0 5%; 
        
    }
    @media screen and (min-width:800px){
        border :1px solid yellow;
        width: 30%;
        padding-top: 30px;
        height: 300px;
        margin: 10px ;
        
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        width: 45%;
        height: 300px;
        padding-top: 30px;
        margin: 20px;
        
    }
    
   
    
    
`

export const Imegs = styled.img`
    border:solid 0px red;
    margin-bottom: 20px;
    width:70px;

    @media screen and (min-width:279px){
        border :0px solid red;
        width:40px;
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        width:50px;
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        width:60px;
    }
    @media screen and (min-width:1100px){
        border :0px solid green;
        width:70px;
    }
`

export const PartTitle = styled.h4`
    font-size: 25px;
    color: rgb(1, 183, 207);
    margin-bottom: 10px;
    @media screen and (min-width:279px){
        border :0px solid red;
        font-size: 15px;
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        font-size: 17px;
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

export const Line = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 5px;
    color: red;
`

export const PartDesc = styled.p`
    font-size: 15px;
    color:  rgb(22, 22, 22);
    text-align: center;
    padding: 0px;
    @media screen and (min-width:279px){
        border :0px solid red;
        font-size: 10px;
    }
    @media screen and (min-width:600px){
        border :0px solid black;
        font-size: 12px;
    }
    @media screen and (min-width:800px){
        border :0px solid yellow;
        font-size: 15px;
    }
    @media screen and (min-width:1100px){
        border :1px solid green;
        font-size: 20px;
    }
`
