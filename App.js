import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills/Skills'
import Projects from './Project'
import { Contact } from './Contact';

 
 function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/education" element={<Education></Education>}></Route>
                    <Route path="/experience" element={<Experience></Experience>}></Route>
                     <Route path="/skills" element={<Skills></Skills>}></Route> 
                    <Route path="/projects" element={<Projects></Projects>}></Route>

                    <Route path="/contact" element={<Contact></Contact>}></Route>
                </Routes>
            </Router>
           
        </div>
    )
}
export default App;