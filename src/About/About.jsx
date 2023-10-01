import React from 'react'
import './About.css'
import img from "../Image/mearn.png"
const About = ({color}) => {
  return (
    <div className={` container-fluid py-5 my-5 ${color[1]}`}>
      <div className="row">
         <div className="col-md-6 ">
            <div className='about ps-3'>
              <h3 className='para my-3 fw-bold'>More About Me</h3>
              <p className='para '>
              I'm Ziad Ahmed, Software JavaScript Developer.<br/>
              I'm a Software Developer who can help your company to achieve more success and achievements in the software industry by building, debugging, and even deploying web applications.<br/>
              I mainly work on Web Development with React JS & Node.js, with good knowledge of other JS frameworks such as Angular, and Next.js, with an interest in other programming languages ex: Java and more.<br/>
              If you want to know more about me and my work, please check my CV.<br/>
              </p>
              <button className={`btn1  ${color[3]==="bg-white4"?color[3]+ " text-white":color[3]+" text-white"}`}> Download My CV</button>
              <button className={`btn1 ${color[3]==="bg-white4"?color[3]+ " text-white":color[3]}`}> <a className="text-white" href='mailto:za693387@gmail.com'>Mail Me</a></button>
              <hr className='hr'/>
              <h3 className='para my-3 fw-bold'>CORE PROFICIENCIES</h3>
              <div className={`p-3 d-flex ${color[2]===undefined?"bg-white3":color[2]}`}>
                <ul>
                  <li>ReactJS</li>
                  <li>Next.js</li>
                  <li>Angular</li>
                  <li>JavaScript</li>
                  <li>Firebase</li>
                  <li>Bootstrap</li>
                  <li>Depolying Web Apps</li>
                </ul>
                <ul className='ms-4'>
                  <li>Material UI</li>
                  <li>HTML/CSS/Sass</li>
                  <li>OOP/Java</li>
                  <li>Git Version Control</li>
                  <li>Building APIs</li>
                  <li>Integrating APIs</li>
                  <li> CSS Animations & UI Design</li>
                </ul>
              </div>
            </div>
          </div> 
          <div className="col-md-6 text-center">
            <div>
              <img src={img} className='img w-100'/>
              <h1 className='py-4'> Find me on Github & Linkedin</h1>
              <div className='py-3'>
              <a target='_blank' href='https://github.com/ZiadAhmed92?tab=repositories'> GitHub: @imdevziadahmed</a><br/>
              <a target='_blank' href='https://www.linkedin.com/in/ziad-ahmed-5b1328265'> Linkedin: @imdevziadahmed</a>
              </div>
            </div>
          </div>
      </div>  
      
    </div>
  )
}

export default About