import React,{useRef} from 'react';
import './Contact.css' ;
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bh53lwj', 'template_48vvtgc', form.current, 'xuNIy--GR9fKj_Soq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section>
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <h2>Contact Us</h2>
                <input type='text' placeholder='First Name'  name='user_fname' required/>
                <input type='text' placeholder='Last Name'  name='user_lname' required/>
                <input type='email' placeholder='Email'  name='user_email' required/>
                <input type='phone' placeholder='09991234567'  name='mobile' maxLength={11} minLength={11} required/>
                <input type='text' placeholder='Subject' name='subject' required/>
                <textarea name='Message' cols='30' rows='10' placeholder='Write a message...'></textarea>
                <button type='submit' >Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact