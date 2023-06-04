import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

 const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

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
     <h2 data-aos = 'zoom-in'> Let's Get In Touch </h2>
    <div className='container contact_container' >
    <form ref={form} onSubmit={sendEmail}  className='primary'>
    <label data-aos = 'fade-left'> <h5>Name</h5></label>
      <input type="text" name="user_name"  placeholder=' full name' data-aos = 'slide-right'/>
      <label data-aos = 'fade-left'><h5>Email</h5></label>
      <input type="email" name="user_email"  placeholder='email' data-aos = 'slide-right'/>
      <label><h5 data-aos = 'fade-left'>Message</h5></label>
      <textarea name="message"  data-aos = 'zoom-in'/>
      <button type="submit" value="Send" className='btn black'  data-aos = 'slide-left'>Send</button>
    </form>
    </div>
    </section>
  );
};

export default Contact