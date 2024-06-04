import { FaFax, FaGithub, FaHeart, FaLinkedin, FaMailBulk } from "react-icons/fa";
import './Footer.css'

function Footer(){
    return(
        <div className="container">
            <div className="foot-container">
                <div className="footer" >
            <div className="foot-content">
      
      <a className="foot-icon" href="https://www.linkedin.com/in/akankshamishra05" target="_blank" rel="noopener noreferrer" style={{color:" #fff"}}  >  <FaLinkedin size={40}/>
      <h3>Linkedin</h3>
      </a>
    </div>
    <div className="foot-content">
      
      <a className="foot-icon" href="https://github.com/Akankshamishraa" target="_blank" rel="noopener noreferrer" style={{color:" #fff"}} >  <FaGithub size={40}/>
      <h3>Github</h3>
      </a>
    </div>
    <div className="foot-content">
      
      <a className="foot-icon" href="mailto:akankshamishra0805@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:" #fff"}} > <FaMailBulk size={40}/>
      <h3>Email</h3>
      </a>
    </div></div>
    
                <p className="foot-para">Made with <FaHeart size={30}></FaHeart> by Akanksha Mishra</p>

            </div>

        </div>
    )
}
export default Footer;