import styled from 'styled-components';

export const HomeSection = styled.div`
    top:150px;
    height: 500px;
    background: url('images/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`

export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: black;
`

export const HomeInfo = styled.h4`
    font-size: 35px;
    color: rgb(1, 183, 207);
    margin-bottom: 20px;
`
export const HomeDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color:rgb(95, 95, 95);
    margin-bottom: 20px;
`

export const Span = styled.span`
    font-weight: bold;
    
    color:#000;
`

export const HomeBtn = styled.button`
    background: rgb(1, 183, 207);
    border-radius:5px;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background: #fff;
        color : rgb(1, 183, 207);
    }
`
