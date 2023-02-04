import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { BsPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AppWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
    const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_y8pthxf','template_qery7fj', toSend,'1fZkOBLDxizq6sVW_')
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
       setToSend({ ...toSend,from_name: '',
       to_name: '',
       message: '',
       reply_to: '', });
       alert("Email Sent Successfuly. Thank you for reaching out.")
	}, function(err) {
	   console.log('FAILED...', err);
      alert("Email failed to send. Please try again.");
	});
  };
  return (
    <>   
    <div className='row contactSection'>
    <div className='getintouch'>
               <h1> Get in Touch </h1>
    </div>
    <div className='col-xl-6 Email'>
        <form className='MainForm' onSubmit={onSubmit}>
        <div className='row WaysToContact'>
    <div className='col-sm  Number'>
    <a href="tel:6475541231">
      <BsPhoneFill size={30}/>
      Give me a Call
      </a>
    </div>
    <div className='col-sm  EmailAddress'>
    <a href="mailto:christian.seguiza@yahoo.com">
      <MdEmail size={30} className="emailPic"/>
      <span>Email me</span>
      </a>
     
    </div>
    </div>
        <div className='form-group'>  
        <input
        className='from form-control'
        type='text'
        name='from_name'
        placeholder='From:'
        value={toSend.from_name}
        onChange={handleChange}
        required
    />
    </div>
        <div>
        <input
        className='to form-control'
        type='text'
        name='to_name'
        placeholder='To:'
        value={toSend.to_name}
        onChange={handleChange}
   
    />
        </div>
    <div>
     <textarea rows = "5" cols = "60" name='message'
             className='message form-control'
             type='text'
             
             placeholder='Your message'
             value={toSend.message}
             onChange={handleChange}
             required
     />
    </div>
    <div>
    <input
        className='yourEmail form-control'
        type='email'
        name='reply_to'
        placeholder='Your email'
        value={toSend.reply_to}
        onChange={handleChange}
        required
    />
    </div>
    <button type='submit' className="btn btn-outline-primary">Send</button>
    </form>
    </div>
    <div className='copyright2'>
      <p>Copyright © Christian Paul Seguiza 2022</p>
    </div>
    </div>

    </>
  )
}
export default AppWrap(Footer, 'contact');