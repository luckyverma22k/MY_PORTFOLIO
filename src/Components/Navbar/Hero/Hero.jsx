import React from 'react';
import './Hero.css';
import profile_img from '../../../assets/profile_img1.png'; // Updated path
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Lucky,</span> Web developer and programmer in C++ based in India</h1>
      <p>
      I am constantly looking for new opportunities in industry, I am willing to work in the field of software development.
      </p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink></div>
        <a href="https://drive.google.com/file/d/1OTekNT-Xav8zHa7Eij7foKe2vIMtrMvz/view?usp=sharing" target="_blank" className="hero-resume">My Resume</a>

      </div>
    </div>
  );
}

export default Hero;
