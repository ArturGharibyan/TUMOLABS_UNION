import { useEffect } from "react"
import { useState } from "react"

const Staff = () => {
    const [staf, setStaff] = useState([])
    
    useEffect(()=>{
    fetch("http://localhost:5000/staffs")
    .then((respons)=>respons.json())
    .then((response)=>setStaff(response))
    },[])



    return (
        <div className="Staff_div">
            {
                staf.map((e,i)=>{
                    return(
                        <div className="Staff_container" key={i}>
                            <div>
                            <img src={e.img}/>
                            </div>

                            <h3>{e.name} {e.surname}</h3>
                            <p>{e.job}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Staff