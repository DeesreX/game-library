import React from 'react';

function Contact() {
  return (
    <div className='contact'>
      <h2 className='contact-title'>Get In Touch</h2>
      <form className='contact-form'>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Message' />
        <button type='submit'>Send</button>
      </form>
      <div className='contact-info'>
        <p>Phone: 555-555-5555</p>
        <p>Email: info@ourapp.com</p>
        <p>Address: 123 Main Street, Anytown USA</p>
      </div>
    </div>
  );
}

export default Contact;