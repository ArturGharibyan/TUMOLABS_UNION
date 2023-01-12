import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Header = () => {

const navigate = useNavigate()
const backhome=()=>{
    navigate('/')
}

    return (
        <nav  className="navbar">
        <div onClick={()=>backhome()} className="logo">
            <div className="divsvg"> <img className="svg"
                    src={"https://i.pinimg.com/originals/9d/de/56/9dde5681a575b8e70af0c88569768fae.png"} /> </div>
            <h1>STUDENT UNION</h1>
        </div>
        <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="span  ">&#9776;</label>
            <div className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li className="services">
                    <Link to="/mession">Mession</Link>
                </li>
                <li><Link to="/staff">Staff</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li id="apply"><Link to="/apply">Apply</Link></li>
            </div>
        </ul>
    </nav>
    )
}

export default Header