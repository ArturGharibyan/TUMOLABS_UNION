import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Mession = () => {

    useEffect(()=>{
        Aos.init({
          offset:200,
          duration:2000
        })
      },[])

    return (
        <div className="mission_div" >
            <span className="mission_span">

            <div className="mission" data-aos="fade-up">
                <h1>Mission</h1>
                <p>
                    Welcome to Student Life!
                    Our mission is to provide quality non-academic programs and services in a safe, positive, and inclusive environment where all feel welcomed, respected, and valued.<br></br>
                    The office of the Student Union is committed to educating students to make meaningful contributions as citizens of the world by offering support, direction, and a range of extracurricular activities
                </p>

            </div>
            </span>
        </div>
    )
}

export default Mession