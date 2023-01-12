import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const Newstudent = () => {

useEffect(()=>{
Aos.init({
    offset:200,
    duration:2000
})
},[])

    return (
        <div data-aos="fade-up" className="newstudentbackground">
            <span className="about_span">
            <div className="newstudent">
                <div>
                <h1>New Students</h1>
                <p>Dear Freshmen, Congratulations on your admission to Tumo Labs!</p>
                <ul>
                    <li>We will hold two advising sessions:</li>
                    <li> Where:        Hall (1st floor)</li>
                    <li>When:         August 25, 26</li>
                    <li>What time:  11 am</li>
                </ul>
                <p>
                    For more details:<br/>
                    Please, check your student email account.
                </p>
                </div>
            </div>
            </span>
        </div>
    )
}

export default Newstudent