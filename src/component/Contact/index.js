import React from 'react';
import {ContactSection ,  ContactTitle , Span , Form , Input , FormInput ,
     InputText , InputEmail , InputExp , TextArea , InputSubmit} from './style.js';
import Footer from './../Footer/index';
import emailjs from 'emailjs-com';



function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gvv8ksf', e.target , 'user_kyRPJVApF9A4HvKIQsNp0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

function Contact () {
    return (
        <React.Fragment>
        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form onSubmit={sendEmail}>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" name="name"/>
                        <InputEmail type="email" placeholder="Your Email" name="email"/>
                    </FormInput>
                    <InputExp type="text" className="sub" placeholder="Your Subject" name="subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message" name="message"></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer/>
        </React.Fragment>
    )
}

export default Contact 
