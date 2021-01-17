import styled from 'styled-components';



export const Div =styled.div`
    padding-top: 100px;
    border: 0px solid red;
    background: white;
`
export const Cover =styled.div`
padding: 10px 0px;

border: 0px solid red;
background: rgb(1, 183, 207);
border-radius: 10px;
height:900px;
`

export const ContactSection = styled.div`
background:  white;
margin-top: 3%;
margin-bottom: 5%;
width: 70%;
border-radius: 20px;
border: 0px solid red;
box-shadow: 10px 10px 10px 0px rgba(207, 207, 207 , 0.5), 2px 2px 10px 0px rgb(200,200,200);

`

export const ContactTitle = styled.h2`
margin-bottom: 0;
margin-top: 0;
text-align: center;
color: black;
`

export const Span = styled.span`

`

export const Form = styled.form`
padding: 14%;
`

export const Formgroup =styled.div`

`

export const Input = styled.input`
    
`

export const FormInput = styled.div`
margin-bottom: -7%;
`

export const InputText = styled(Input)`
margin:10px;

`

export const InputEmail = styled(Input)`
margin:10px;
`

export const InputExp = styled(Input)`
margin:10px;
`

export const TextArea = styled.textarea`
margin:10px;
`

export const BtnContactSubmit = styled.button`
width: 100%;
border: none;
border-radius: 10px;
padding: 5px;
background: rgb(1, 183, 207);
font-size:20px;
font-weight: 700;
color: #fff;
margin-left:10px;
cursor: pointer;
&:hover {
    background: rgb(245, 244, 244);
    color : rgb(1, 183, 207);
}
`
export const ContactImage =styled.div`
    text-align: center;
`
export const Img =styled.img`
    border-radius: 6rem;
    width: 11%;
    margin-top: -3%;
    transform: rotate(29deg);
`





