
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"


const Studentresidence = () => {

useEffect(()=>{
Aos.init({
    offset:200,
    duration:2000
})
},[])


    return (
        <div  data-aos="fade-up" className="residence_div" >
            <div  className="residence">
                <h1>Student residence</h1>
                <p>Tumo Labs will open the newly built Student Residence on January 10. <br></br>The three-story building has 20 double-occupancy rooms and will house up to 40 students from Armenia's regions and abroad.
                </p>
            <video autoPlay loop muted src="/video/medium.mp4"></video>

                

            
            
            <div className="u-flexOne " style={{height:"0", paddingBottom: "56.25%"}}>

    </div>
        </div>
            </div>

        
    )
}

export default Studentresidence