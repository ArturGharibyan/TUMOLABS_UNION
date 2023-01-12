import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Benefit =()=>{

    useEffect(()=>{
        Aos.init({
          offset:200,
          duration:2000
        })
      },[])

    return(
        <>
        <div  className="Benefit">
    <div data-aos="fade-right" className="Bebefit_div1">
        <h1 className="benefit_h1">6 months after Graduation<br/>
our students 
</h1>
        <div>
            <img className="Bebefit_div1_img" src="/img/2.png" />
        </div>
        <div className="B1"><div><div><div><img className="benefitSvg" src="/svg/9.png" /></div><h2>Student Portal</h2></div><h1>50% </h1><p>employed</p></div></div>
        <div className="B2"><div><div><img className="benefitSvg" src="/svg/9.png" /></div><h2>30% </h2><p>continued their education</p></div></div>
        <div className="B3"><div><div><img className="benefitSvg" src="/svg/9.png" /></div><h1>43%</h1><p>employed in Armenia </p></div></div>
    </div>
    <div data-aos="fade-left" className="Bebefit_div2">
        <h1>Student Union Provides</h1>
        <div className="Provides_text"><p>Student union provides experience that extends beyond the classroom. And we welcome any initiation of our students to explore their interestings through student clubs and promoting organizational and leadership skills.
            Cooperation with the student union gives students the opportunity to introduce themselves as
        </p></div>
        <div className="check_futures">
            <div><img className="checkSvg" src="/svg/7.png"/><p>Leader </p></div>
            <div><img className="checkSvg" src="/svg/7.png"/><p>Accumulate organizational experience</p></div>
            <div><img className="checkSvg" src="/svg/7.png"/><p>Improve communication skills</p></div>
            <div><img className="checkSvg" src="/svg/7.png"/><p>Prepare for the future labor market            </p></div>
            <div><img className="checkSvg" src="/svg/7.png"/><p>Enjoy student life</p></div>
            <div><img className="checkSvg" src="/svg/7.png"/><p>Extend networking </p></div>
        </div>
    </div>
</div>

        </>
    )
}


export default Benefit