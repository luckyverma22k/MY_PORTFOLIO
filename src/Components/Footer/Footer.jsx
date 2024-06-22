import React from 'react'
import './Footer.css'
import logo from '../../assets/logo1.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="Footer logo" />
                <p>CSE undergraduate at NIT Silchar, India.</p>
            </div>
            
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; 2024 Lucky. All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Terms of services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
