import React from 'react';
import './About.css';

import profile_img from '../../assets/about_profile.jpg';
import gfg_logo from '../../assets/gfg_logo.png';
import leetcode_logo from '../../assets/leetcode_logo1.png';
import linkedin_logo from '../../assets/linkedin_logo.png';


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>

      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a third-year undergraduate student at the <i>National Institute of Technology, Silchar</i>, 
        majoring in <i>Computer  Science And  Engineering</i> . My expertise lies in Data Structures & Algorithms, 
        and Object-Oriented Programming. I possess strong problem-solving skills and excel in coding tasks. 
        Known for my quick adaptability and ability to thrive in diverse environments, I possess a unique 
        inclination towards approaching problems from various angles, allowing me to envision diverse perspectives. 
        This ability aids me in identifying suitable solutions that align with the specific requirements of each problem</p>
            {/* <p>My passion is for frontend development.</p> */}
          </div>
          <div className="about-skills">
          <div className="about-skill">
              <p>DSA in C++</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>900+</h1>
              <p>DSA QUESTIONS SOLVED </p>
            </div>
           
            <div className="about-achievement">
              <h1>15+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            
            <div className="about-achievement">
    <a href="https://www.geeksforgeeks.org/user/luckyku2ld5/" target="_blank" rel="noopener noreferrer">
      <img src={gfg_logo} alt="GFG Logo" />
      <p>LINK TO GFG</p>
    </a>
  </div>
 
  <div className="about-achievement">
    <a href="https://leetcode.com/u/Endeavorer/" target="_blank" rel="noopener noreferrer">
      <img src={leetcode_logo} alt="LeetCode Logo" />
      <p>LINK TO LEETCODE</p>
    </a>
  </div>
 
  <div className="about-achievement">
    <a href="www.linkedin.com/in/lucky-verma-523567223" target="_blank" rel="noopener noreferrer">
      <img src={linkedin_logo} alt="LinkedIn Logo" />
      <p>LINK TO LINKEDIN</p>
    </a>
  </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
