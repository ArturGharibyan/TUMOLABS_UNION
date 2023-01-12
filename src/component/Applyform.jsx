
import { useState } from 'react'
import { useEffect } from 'react'

const Applyform = () => {
    const [nameDirty, setNameDirty] = useState(false)
    const [nameerror, setNameerror] = useState("minimum 3 characters")
    const [surnameDirty, setSurnamedirty] = useState(false)
    const [surnameerror, setSurnameerror] = useState("minimum 3 characters")
    const [phoneDirty, setPhonedirty] = useState(false)
    const [phoneerror, setPhoneerror] = useState("only a number")
    const [emailDirty, setEmaildirty] = useState(false)
    const [emailerror, setEmailerror] = useState("incoplete")
    const [valid, setValid] = useState(false)
    const [user,setUser]=useState({name:"",surname:"",email:"",phone:""})

    const submit = (event) => {
        event.preventDefault()

    }

    useEffect(() => {
        
        if (nameerror || surnameerror || emailerror || phoneerror) {
            setValid(false)
        }
        if(user.name && user.surname && user.email && user.phone){
            setValid(true)
        }else{
              setValid(false)
        }
        
       
    }, [nameerror, surnameerror, emailerror, phoneerror ,user.name, user.surname, user.email, user.phone, ])


    const blurhandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true)
                break;
            case "surname":
                setSurnamedirty(true)
                break;
            case "email":
                setEmaildirty(true)
                break;
            case "phone":
                setPhonedirty(true)
                break;
        }
    }
    const namevalide = (e) => {
        setUser({...user,name:e.target.value})
        if (e.target.value.length < 3) {
            setNameerror("minimum 3 characters")
        } else {
            setNameerror("")
        }
    }
    const surnamenamevalide = (e) => {
        setUser({...user,surname:e.target.value})
        if (e.target.value.length < 3) {
            setSurnameerror("minimum 3 characters")
        } else {
            setSurnameerror("")
        }
    }
    const emailvalidate = (e) => {
setUser({...user,email:e.target.value})
        let filter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!filter.test(String(e.target.value)) || e.target.value > 250) {
            setEmailerror("this email incorect")

        } else {
            setEmailerror("")
        }
    }
    const phonevalide = (e) => {
setUser({...user,phone:e.target.value})
        let phonenumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        if (!phonenumber.test((e.target.value))) {
            setPhoneerror("only a number")
        } else {
            setPhoneerror("")
        }
    }


    const apply = async (user) => {
        const res = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const data = await res.json()
        setUser({ ...user, data })
        setUser({ name: "", surname: "", email: "", phone: "" })
       
    }
    


    return (
        <>
          
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={submit}>
                <h3>Apply</h3>
                <label >Name</label>
                <input onChange={e => namevalide(e)} onBlur={e => blurhandler(e)} type="text" name='name' value={user.name} />
                {(nameDirty && nameerror) && <span style={{ color: "red",fontSize:"12px",position:"absolute" }} >{nameerror}</span>}
                <label>Surname</label>
                <input onChange={e => surnamenamevalide(e)} onBlur={e => blurhandler(e)} type="text" name='surname' value={user.surname} />
                {(surnameDirty && surnameerror) && <span style={{ color: "red",fontSize:"12px",position:"absolute" }}>{surnameerror}</span>}
                <label>Email</label>
                <input onChange={e => emailvalidate(e)} onBlur={e => blurhandler(e)} type="email" name='email' value={user.email} />
                {(emailDirty && emailerror) && <span style={{ color: 'red',fontSize:"12px",position:"absolute" }}>{emailerror}</span>}
                <label>phone</label>
                <input onChange={e => phonevalide(e)} onBlur={e => blurhandler(e)} type="tel" name="phone" value={user.phone} />
                {(phoneDirty && phoneerror) && <span style={{ color: "red",fontSize:"12px" ,position:"absolute"}}>{phoneerror}</span>}
                <button onClick={() => {apply(user)}} disabled={!valid}>Apply</button>
            </form>

        </>
    )
}

export default Applyform