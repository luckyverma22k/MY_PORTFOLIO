import React from 'react'
import './Contact.css'

import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "16ad1450-9c03-434f-af2a-d3bca667458b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
        alert(res.message)
        }
      };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            {/* <img src={theme_pattern} alt="theme pattern" /> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Text Me</h1>
                <p>Get in touch via:</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail icon" />   
                        <p>luckyverma22k@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="call icon" />   
                        <p>+91-6204656114</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location icon" />   
                        <p>Silchar, Assam</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Your Message</label>
                <textarea name="message"  rows="4" placeholder='Enter Your message'></textarea>
               <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
