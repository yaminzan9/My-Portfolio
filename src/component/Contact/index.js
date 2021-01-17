import React from 'react';
import {ContactSection ,  ContactTitle , Span , Form , Input , FormInput , Cover ,
     InputText , InputEmail , InputExp , TextArea , BtnContactSubmit , Div , Img , Formgroup , ContactImage} from './style.js';
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
        <Div id="contact" >
        
        <React.Fragment>
        <ContactSection className="container" >
            <ContactImage>
                <Img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </ContactImage>
                <ContactTitle>Drop Me A line</ContactTitle>
                <Form onSubmit={sendEmail}>
                    <FormInput className="row" >
                    <div className="col md 6" >
                    <Formgroup className="formgroup" >
                    <InputText className="form-control" type="text" placeholder="Your Name" name="name"/>
                    </Formgroup>
                    <Formgroup className="formgroup" >
                    <InputEmail className="form-control" type="email" placeholder="Your Email" name="email"/>
                    </Formgroup>
                    <Formgroup className="formgroup" >
                    <InputExp className="form-control" type="text"  placeholder="Your Subject" name="subject"/>
                    </Formgroup>
                    <Formgroup className="formgroup" >
                    <BtnContactSubmit type="submit" value="Send Message">submit</BtnContactSubmit>
                    </Formgroup>
                    </div>
                    <div>
                    <TextArea className="form-control" cols="30" rows="10"  placeholder="Your Message" name="message"></TextArea>
                    </div>
                    </FormInput>
                </Form>
                
        </ContactSection>
        </React.Fragment>
        
        </Div>
    )
}

export default Contact 
