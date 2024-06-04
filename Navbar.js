import {Link} from "react-router-dom"
import './Navbar.css'

function Navbar(){
    
    return(
       <>
       <nav className='nav-wrapper'>
       <div className="nav-container">
        <h2>Portfolio</h2>
        <div className="nav-menu">
            <ul className='nav-list'>
                <li>
                    <Link to='/' className="nav-home"  >Home</Link></li>
                    <li>
                    <Link to="/education" className="nav-home" >Education</Link>
                </li>
                    <li>
                    <Link to="/experience" className="nav-home" >Experience</Link>
                </li>
                <li>
                <Link to="/skills" className="nav-home" >Skills</Link>
                </li>
                <li>
                <Link to="/projects" className="nav-home" >Projects</Link>
                </li>
                <li>
                <Link to="/contact" className="nav-home" >Contact Me</Link>
                </li>
                
            </ul>
        </div>

       </div>
       </nav>
       </>
    )
}
export default Navbar;