
import Navbar from "./Navbar/Navbar";
import Hero from "./component/Hero";
import Footer from "./Navbar/Footer";
function Home(){
    return(
        <div>
            <div>
             <Navbar/></div>
             <div className="background"><Hero/></div>
        <div className="background2"><Footer/></div>
            
            
        </div>
    )
}
export default Home;