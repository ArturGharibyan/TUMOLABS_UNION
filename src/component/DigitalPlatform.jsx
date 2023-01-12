import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const DigitalPlatform=()=>{
    useEffect(()=>{
        Aos.init({
          offset:200,
          duration:2000
        })
      },[])
    return (
<>
<div data-aos="fade-left" className="digitalPlatform">
        <div className="platform_div1">
            <h1 className="Platform_h1">Digital Platform <br/> for all student <br/> activities.</h1>
            <p>Tumo Labs Student Union</p>
            <div className="Go_to_app">
                <p>Working Hours 24/7</p>
            </div>

        </div>
        <div data-aos="fade-right" className="platform_div2"><img className="digital_Platform_img" src="./img/1.png" /></div>

    </div>
</>

    )
}

export default DigitalPlatform