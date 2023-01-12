import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Home from "../Home"
import Staff from "../Staff"
import Mession from "../Mession"
import About  from "../About"
import Services from "../Services"
import Apply from "../Apply"
import  Career from "../Career"
import Event from "../Event"
import Studentclub from "../Studentclub"
import StudentLife from "../StudentLife"
import Studentresidence from "../Studentresidence"
import Newstudent from "../Newstudent"
import Menu from "../Menu";

const Myrouter = () => {
    return (
        <>
             <BrowserRouter>
             <Menu/>
                <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/mession" element={<Mession />}/>
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/apply" element={<Apply />}/>
                <Route path="/career" element={<Career />}/>
                <Route path="/event" element={<Event />}/>
                <Route path="/studentclub" element={<Studentclub />}/>
                <Route path="/studentlife" element={<StudentLife/>}/>
                <Route path="/newstudent" element={<Newstudent />}/>
                <Route path="/studentresidence" element={<Studentresidence />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Myrouter
