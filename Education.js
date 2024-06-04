import Navbar from "./Navbar/Navbar";
import './Education.css'
import Footer from "./Navbar/Footer";
function Education(){
    return(
        <div className="education">
            <Navbar/>
            <div className="main-container">
                <div className="edu-container">
            <div >
                <img className="edu-img" src="/assets/images/degree2 img.jpg"></img>

            </div>
            <div className="edu-content">
            <div className="edu-box">
                    <h1>Education</h1>
                    
                    <p>Basic Education And Certification</p>
                    
                    </div>
                <div className="grad-icon">
                    <img className="grad" src="assets/images/education1.jpg"></img>
                    <div className="school-box">
                    <img className="school-icon" src="assets/images/education2.jpg"></img>
                    </div>
                </div>

            </div>
            </div>
            <div>
                <div className="edu-degree">
                    <h1>Degree Received</h1>
                    <div className="bachelors">
                        <img className="college-img" src="/assets/images/college logo.jpeg"></img>
                        <div className="college-heading">
                            <div className="Title">
                            <h2>Jiwaji University, Gwalior</h2>
                            
                            <p>2019-22</p>
                            
                            
                            </div>
                            <div className="duration">
                        <p>Bachelors of Arts</p> 
                        
                        </div>
                         <div className="college-content">
                            <p> Despite my background in arts, I have pursued various courses in Political science and sociology  in various topics like- Artificial Intelligence And Ethics , Blockchain and Social Trust.</p><br></br>
                            <p>During my university tenure, I was actively involved in the multimedia department, where I contributed to the creation of documentary films and interviews.</p>
                            <div className="button">
                            <a className="button1" href="https://jiwaji.edu/" target="_blank" rel="noopener noreferrer"  >
      
                            Visit website</a></div>
                        </div> 
                        
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="school">
                <div className="school-content">
                <img className="school-img" src="/assets/images/school logo.jpeg"></img>
                <div className="school-heading">
                    <div className="Title">
                            <h2>Global International Public School</h2>
                            <p>2018-2019</p>
                            </div>
                            <div className="duration">
                        <p>Higher Secondary</p> 
                        
                        </div>
                            <div className="school-content2">
                            <p>Consistently achieved Honor Roll status every semester from 9th grade to 12th grade.</p><br></br>
                            <p>Participated in different program to enhance team management and communication skills.</p><br></br>
                            <p>  Collaborated with club members to develop a web application for managing school records.</p>
                            <div className="button">
                            <a className="button2" href="https://www.gipsdabra.com/" target="_blank" rel="noopener noreferrer"  >Visit website
      
      </a></div>
                        </div> 
                        </div>
                        
                        
                        
            </div>
            </div> 
            </div>
            <Footer/>
            
        </div>
    )
}
export default Education;