import styled from 'styled-components';

export const Navbarsection = styled.div`
    padding: 5px 0;
    width:100%;
    height:100px;
    z-index: 1000;
    background: #fff;
    position: fixed;
    border-bottom: 0px solid red;
`
export const ImgLogo = styled.img`
    width:150px;
    border:solid 0px red;
    padding:0px;
`

export const Logo = styled.div`
    width:50%;
    float:left;
`
export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
`

export const Ullist = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0px;
    padding-top: 20px;
    border: solid 0px red;
`

export const ListItem = styled.li`
    display: inline-block;
    
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover {
        color:#00acac;
    }
`
