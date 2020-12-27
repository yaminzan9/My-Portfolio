import styled from 'styled-components';

export const WorkSection = styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff;
    margin-top: 200px;
`

export const WorkTitle = styled.h2`
    font-size: 60px;
    text-align: center;
    text-transform: uppercase; 
`

export const Span = styled.span`
    font-weight: normal
`

export const WorkPart = styled.div`
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 0px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left: ${props => props.first === 1 ? '0' : '5%'}
`

export const Imegs = styled.img`
    border:solid 0px red;
    margin-bottom: 20px;
    width:70px;
`

export const PartTitle = styled.h4`
    font-size: 25px;
    color: rgb(1, 183, 207);
    margin-bottom: 20px;
`

export const Line = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
    color: red;
`

export const PartDesc = styled.p`
    font-size: 15px;
    color:  rgb(22, 22, 22);
    padding: 20px;
`
