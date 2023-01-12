import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { hover } from "@testing-library/user-event/dist/hover"






const FedbackAndContainers = () => {
    useEffect(()=>{
        Aos.init({
          offset:200,
          duration:2000
        })
      },[])

    
    return (
        <>
            <div data-aos="fade-up" className="feadback_containers">

                <div  className="fead_back">
                    <h1>Your feedback is important for us </h1>
                    {/* <p className="featcure_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt ab fugiat! Debitis tenetur asperiores ipsa, </p> --> */}
                    <div>
                        <p><a style={{textDecoration:"none",color:"white"}} href="https://docs.google.com/forms/d/e/1FAIpQLSfQoY0_NwiZVKbIDfE5XV8zn7mheDnBzBTE4WTdsBznqFZHOg/viewform?embedded=true">Feedback</a></p>
                    </div>
                </div>
                <div  className="feadback_containers_div2">
                    <div  data-aos="fade-up">
                        <div  className="a"><img src="/svg/2.png" /></div>
                        <h5  ><Link  className="px" style={{ textDecoration: "none", }} to="/career">Career</Link></h5>
                        <p className="container_text">From student desk to an employee</p>
                    </div>
                    <div  data-aos="fade-up">
                        <div  className="b"> <img src="/svg/3.png" /></div>
                        <h5  ><Link className="px" style={{ textDecoration: "none",  }} to="/event">Event Calendar</Link></h5>
                        <p className="container_text">All events of Tumo Labs</p>
                    </div>
                    <div  data-aos="fade-up">
                        <div  className="c"><img src="/svg/5.png" /></div>
                        <h5  ><Link className="px" style={{ textDecoration: "none",  }} to="/studentclub">Student Clubs</Link></h5>
                        <p className="container_text">Student activities beyond the classroom</p>
                    </div>
                    <div  data-aos="fade-up">
                        <div  className="d"><img src="/svg/4.png" /></div>
                        <h5  ><Link className="px" style={{ textDecoration: "none",  }} to="/studentresidence">Student Residence</Link></h5>
                        <p className="container_text">Coming Soon</p>
                    </div>
                    <div  data-aos="fade-up">
                        <div  className="e"><img src="/svg/6.png" /></div>
                        <h5  ><Link className="px" style={{ textDecoration: "none",   }} to="/newstudent">New Student</Link></h5>
                        <p className="container_text">Welcome!</p>
                    </div>
                    <div  data-aos="fade-up">
                        <div  className="f"><img src="/svg/1.png" /></div>
                        <h5  ><Link className="px" style={{ textDecoration: "none",  }} to="/studentlife">Student Life</Link></h5>
                        <p className="container_text">Photo Gallery of memorable moments </p>
                    </div>
                </div>

            </div>
        </>
    )
}


export default FedbackAndContainers