import { FaMedal } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

function About() {
  return (
    <>
    <div className="aboutDiv">
      <div className="greeting">
        <span className="hello">Hello, I'm</span>
        <span className="name">Reese Myres</span>
      </div>
      <div className="topSection">
        <img src="../images/img.png" alt="Picture of Reese Myres" />
        <div className="boxContainer">
          <div className="experienceDiv">
            <span className="icon"><FaMedal /></span>
            <span className="num">3+</span>
            <span className="exp">Years Experience</span>
          </div>
          <div className="educationDiv">
            <span className="icon"><FaComputer /></span>
            <span className="num">15+</span>
            <span className="tech">Technologies</span>

          </div>
        </div>
      </div>
      
      
      <div className="textContent">
        <p>
          Full-stack developer passionate about building responsive, 
          user-focused web applications using modern technologies. 
          Experienced in designing and optimizing algorithms, 
          relational databases, and RESTful APIs for scalable performance.
        </p>
        <p>
          With a strong foundation in both frontend and backend development, 
          I bring a well-rounded skill set and a proven ability to deliver full-featured, 
          dynamic platforms. My background in management roles has also equipped me with 
          excellent leadership, communication, and problem-solving skills that translate 
          effectively to collaborative development environments.
        </p>
      </div>

      <div className="contactDiv">
        <div className="download">
            <span className="icon"><FaFileDownload /></span>
            <a href="/Reese_Myres_Resume.pdf" download="Reese_Myres_Resume.pdf">Download Resume</a>
        </div>

        <div className="links">
            <div className="linkDiv">
                  <a href="mailto:reese.myres1@gmail.com"><FaEnvelope /></a>
              </div>
              <div className="linkDiv">
                  <a href="https://www.linkedin.com/in/reese-myres/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
              <div className="linkDiv">
                  <a href="https://github.com/rbmyres" target="_blank" rel="noopener noreferrer"><FaGitSquare /></a>
              </div>
        </div>
      </div>      
    </div>

    <div className="bottomLine"></div>
    </>

  )
}

export default About