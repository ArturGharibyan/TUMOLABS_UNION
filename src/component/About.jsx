import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const About = () => {
    useEffect(()=>{
        Aos.init({
          offset:200,
          duration:2000
        })
      },[])
    
    return (
        <div  className="about_Div">
            <span className="about_span">
            <div data-aos="fade-up" className="about">
                    <h1>About</h1>

                <p>

                    Tumo Labs Student Union is the community center that provides an environment for social interaction, academic support, education and exchange of ideas for its students.
                   <br></br>
                   <br></br>
                    Student Union delivers various essential services in a welcoming climate area to provide student success:
                    <br></br>
                    <br></br>
                    <li>New students' orientation sessions</li>
                    <li>Student clubs organizing</li>
                   <li>Academic support:</li> <br/>
                    Math and writing consultants support
                   <li>Workshops</li> 
                    <li>Abroad study consultation and organization</li>
                        <br/>

                </p>
            </div>
            </span>
        </div>
    )
}

export default About