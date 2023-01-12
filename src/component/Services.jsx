import { borderRadius } from "@mui/system"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Services = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 2000
        })
    }, [])



    return (
        <>
            <div data-aos="fade-up" className="service">
                <h1 style={{ textAlign: "center", color: "white" }}>Services</h1>
                <a style={{ display: "flex", justifyContent: "right" }} href="#section2"><img style={
                    {
                        width: "60px",
                        height: "60px",

                    }
                } src="/svg/arow.png" /></a>
                <div className="main" id="section1" data-aos="fade-up">
                    <h1>Math & Writing Center</h1>
                    <h3>We are here to help you to feel confident</h3>
                    <p>Come to discuss your questions with one of our friendly and professional consultant.</p>
                    <br />
                    <ul>
                        <li>
                            Math consultant will provide help with any math-related problem or topic, including, but not limited to,  business math, statistics, physics, and calculus.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Writing consultant will help to improve your research skills, grammar, essay writing, business writing, citing sources, etc.
                        </li>
                    </ul>
                    <ul  >
                        <li>
                            Engineering consultant provides one-on-one and group tutorial sessions to support Engineering degree students with math and physics courses.
                        </li>
                    </ul>
                    <div className="schedule" >< a style={{ textDecoration: "none", color: "white" }} href="https://form.jotform.com/223493419014049">Schedule an appointment</a></div>
                </div>
                <div id="section2" className="main" data-aos="fade-up">
                    <h1>Counseling services</h1>
                    <h3>Your personal information confidentiality is very important to us</h3>
                    <p>Counseling services are available to all Tumo Labs students.
                        Many students face academic, personal, and social stress during their educational experience.
                        <br></br>
                        <br></br>
                        We provide a safe and comfortable environment for our students.
                        If you feel alone, anxious or stressed.
                        Feeling bad is normal, do not hesitate to ask for our support.
                    </p>
                    <div className="schedule"><a style={{ textDecoration: "none", color: "white" }} href="https://form.jotform.com/223493419014049">Schedule an appointment</a></div>
                </div>
                <div data-aos="fade-up">
                    <h1>Disability Support Services</h1>
                    <p>Our goal is to establish an inclusive environment and resources, to support diverse student learning abilities.</p>
                    <br />
                    <a href="https://forms.zohopublic.com/ustudentedu/form/DisabilitySelfIdentificationForm/formperma/P7y-njI8OTDaV5IEKVOhfwITed8OSDafigKI0cDcfEk">Disability Self-Identification Form </a>
                    <br /><br />
                    <h1>Procedure</h1>
                    <ol>
                        <li> Submit a copy of your current disability documentation from your doctor.<br /></li>
                        <li>  Counselor will contact you after reviewing the documents Please note that the information regarding the student's disability will not be released to any staff or
                            administration without the student's consent.</li>
                        <li>   Please, schedule an appointment before classes begin.</li>
                        <li>  The meeting will allow a counselor to discuss with you the
                            accommodations you are eligible to receive based on your disability-related functional limitations.</li>
                    </ol>
                </div>
                <div data-aos="fade-up">
                    <h1>Study abroad</h1>
                    <p>The students have an opportunity to complete a semester within an exchange program and acquire experience that will guide them through their education and will expand their worldview
                        Tumo Labs has a partnership with:
                        Erasmus + Universities
                    </p>
                    {/* <li><a href="https://form.jotform.com/223493419014049">Schedule an appointment</a></li> */}
                    <p>Contact us: <b style={{ color: "#0D6EFD", fontSize: "15px" }}>ustudentedu@gmail.com</b></p>
                </div>
            </div>
        </>
    )
}

export default Services