import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGit } from "react-icons/fa6";

function Projects() {
  return (
    <div className="projectsDiv">

        <div className="title">Projects</div>

        <div className="projects">
            <div className="project">
                <img src="../images/mixer.png" alt="Image of mixer web application" />
                <span className="name">Mixer</span>
                <p className="info">Full-Stack social media application </p>
                <div className="techDiv">
                    <div>Vite + React</div>
                    <div>Node.js</div>
                    <div>Express</div>
                    <div>Sass</div>
                    <div>MySQL</div>
                    <div>JWT</div>
                    <div>Cloudflare R2</div>
                    <div>Docker</div>
                </div>

                <div className="links">
                    <a href="https://client-qfaf.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <span><FaExternalLinkAlt /></span>
                        Website
                    </a>
                    <a href="https://github.com/rbmyres/CocktailRecipes" target="_blank" rel="noopener noreferrer">
                        <span><FaGithub /></span>
                        Code
                    </a>
                </div>
            </div>

            <div className="project">
                <img src="../images/events.png" alt="Image of event web application" />
                <span className="name">Event Planner</span>
                <p className="info">Full-Stack event management application</p>
                <div className="techDiv">
                    <div>HTML5</div>
                    <div>CSS3</div>
                    <div>JavaScript</div>
                    <div>MySQL</div>
                    <div>PHP</div>
                    <div>Agile</div>
                </div>
                
                <div className="links">
                    <a href="https://events.rbmyres.com/" target="_blank" rel="noopener noreferrer">
                        <span><FaExternalLinkAlt /></span>
                        Website
                    </a>
                    <a href="https://github.com/rbmyres/EventPlanner" target="_blank" rel="noopener noreferrer">
                        <span><FaGithub /></span>
                        Code
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects