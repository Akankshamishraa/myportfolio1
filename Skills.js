import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import './Skills.css'
import { FaCircle, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

function Skills(){
    return(
        <div>
            <Navbar/>
            <div className="skill-container">
            <img className="skill-img" src="./assets/images/skill2.jpg"></img>
            <div className="main-content">
             <h1>Skills</h1>
             <p>I am skilled in React.js, CSS, HTML, JavaScript, React Hooks, and React Redux,deploying web apps on Cloud. From inception to launch, I manage projects effectively, prioritize communication, and foster collaboration. I continuously update my skills to remain abreast of industry advancements.</p>
             
               </div>
            </div>
            <section>
            <div className="content-container" id="skills">
                <h1 className="heading1">Technical Skills</h1> 
                <div className=" Technical-bars">
                    <div className="bar">
                        <div className="info">
                        <FaHtml5 size={30} style={{marginTop:"1rem", marginRight:"0.5rem"}}/>
                            <span>HTML5</span>

                        </div>
                        <div className="progress-line html">
                            <span data-percentage="90%" ></span>
                        </div>
                        <div className="bar">
                        <div className="info">
                            <FaCss3 size={30} style={{marginTop:"1rem", marginRight:"0.5rem"}}/>
                            <span >CSS3</span>

                        </div>
                        <div className="progress-line css">
                            <span data-percentage="80%" ></span>
                        </div>
                        <div className="bar">
                        <div className="info">
                        <FaJs size={30} style={{marginTop:"1rem", marginRight:"0.5rem"}}/>
                            <span>Javascript</span>

                        </div>
                        <div className="progress-line js">
                            <span data-percentage="80%" ></span>
                        </div>
                        <div className="bar">
                        <div className="info">
                        <FaReact size={30} style={{marginTop:"1rem", marginRight:"0.5rem"}}/>
                            <span>React JS</span>

                        </div>
                        <div className="progress-line react">
                            <span data-percentage="70%" ></span>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>

                </div>
            </div>
            <div className="container1">
                <div className="cont-heading">
                <h1 className="heading1">Professional Skills</h1></div>
                <div className="radial-bars">
                <div className="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 ">
                    <circle className="progress-bar" cx="60" cy="60" r="50"></circle>
                    <circle className="path path-1" cx="60" cy="60" r="50"></circle>
                    </svg>
                <div className="percentage">80% </div>
           <div className="text"> Creativity</div>
              
           
                </div>
                <div className="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 ">
                    <circle className="progress-bar" cx="60" cy="60" r="50"></circle>
                    <circle className="path path-1" cx="60" cy="60" r="50"></circle>
                    </svg>
                <div className="percentage">90% </div>
           <div className="text"> Communication</div>
              
           
                </div>
                


                <div className="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 ">
                    <circle className="progress-bar" cx="60" cy="60" r="50"></circle>
                    <circle className="path path-1" cx="60" cy="60" r="50"></circle>
                    </svg>
                <div className="percentage">85% </div>
           <div className="text"> Collaboration</div>
              
           
                </div>
                <div className="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 ">
                    <circle className="progress-bar" cx="60" cy="60" r="50"></circle>
                    <circle className="path path-1" cx="60" cy="60" r="50"></circle>
                    </svg>
                <div className="percentage">90% </div>
           <div className="text"> Adaptability</div>
              
           
                </div>
                </div>
            </div></section>
            <div>
            <div className="tools-heading">
                    <h1 className="heading1">Tools</h1>
                    </div>
                <div className="tools-box">
                    
                    <img className="tools-code" src="assets/images/vs-icon.png" ></img> 
                    <p className="tools-naming">VS Code</p>
                    <img className="tools-code" src="assets/images/postman.jpg"></img> <p className="tools-naming">Postman</p>
                    <img className="tools-code" src="assets/images/github icon.png"></img> <p className="tools-naming">Github</p>

                    <img className="tools-code" src="assets/images/power bi.jpg"></img> <p className="tools-naming">Power Bi</p>

                </div>
            </div>
            

            <Footer/>
        </div>
    )
}
export default Skills;