
import { FaHtml5, FaJs, FaReact } from "react-icons/fa"
import "./Hero.css"
import { FaCss3 } from "react-icons/fa6"



 export default function Hero(){
return(
    <div className="hero-container">
    <div className="hero-content">
        <div className="hero-para">
        <h2>Hello, I'm</h2>
        <h1>Akanksha Mishra</h1>
        <div className="para-content">
        <p>An enthusiastic individual who consistently strives to contribute to </p>
        <p>the development of end-to-end products,with a focus on frontend</p>
        <p> & all related aspects.</p>
        <p>I Aim to build sustainable and scalable social and technical systems that</p>
            <p> make a meaningful impact.</p></div>
        </div>
        <div>
                   <img className="tech-img" src='./assets/images/image.jpeg' alt=""/>
                </div>
        </div> 
        <div className="about-container">
        <h1>What I do?</h1>
            <div className="about-heading">
                
                <div>
                    <img className="about-img" src="./assets/images/experience image.jpeg"></img>

            </div>
            <div className="about-content">
                <h2>Frontend Development</h2>
                <div className="tech-icons">

                
            <div className="react-icon">
            <FaHtml5 className="react" size={80} />
            </div>
            <div className="react-icon">
            <FaCss3 className="react" size={80} />
            </div>
            <div className="react-icon">
            <FaJs  className="react"size={80} />
            </div>
            <div className="react-icon">
            <FaReact className="react" size={80} />
            </div>
            </div>
            <div className="about-para">
            <div >
                <p>I used to Developed web applications featuring responsive userinterfaces through  the application of</p>
                <p> React.js, Redux,HTML, CSS, JavaScript, and Redux Saga.</p>
                 

 <p>
Innovating and implementing new functionalities for applications, accompanied by the development of unit</p>
<p>test cases using Jest and React Testing Library.</p>
<p>Proficiently integrating APIs with Redux Saga and seamlessly binding API data to userinterface screens and many more
</p></div>
</div>
            </div>
            

        </div>
            

        </div>
        
       
    </div>
    
)
}