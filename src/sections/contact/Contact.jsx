import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rb9ligw', 'template_4jrqd0t', form.current, 'ezQZPSWyjkvoT50qX')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id = 'contact'>
     <h2> Let's Get In Touch </h2>
    <div className='container contact_container'>
    <form ref={form} onSubmit={sendEmail}  className='primary'>
    <label> <h5>Name</h5></label>
      <input type="text" name="user_name"  placeholder=' full name'/>
      <label><h5>Email</h5></label>
      <input type="email" name="user_email"  placeholder='email'/>
      <label><h5>Message</h5></label>
      <textarea name="message" />
      <button type="submit" value="Send" className='btn black' >Send</button>
    </form>
    </div>
    </section>
  );
};

export default Contact