

const Footer=()=>{
    return(
        <>
        <footer htmlFor ="footer" className="footer-distributed">

<div className="footer-left">
<img src="https://i.pinimg.com/originals/9d/de/56/9dde5681a575b8e70af0c88569768fae.png"/>
    <h3>Student<span>Union</span></h3>

   

    <p className="footer-company-name">© 2022 Eduunion Learning Solutions Pvt. Ltd.</p>
</div>

<div className="footer-center">
    <div>
        <i className="fa fa-map-marker"></i>
          <p><span>309 - 2 Halabyan st.,
             Bldg. No. A - 1, Sector - 1</span>
            Yerevan, Armenia - 400710</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+37494000001</p>
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@edunion.com">ustudentedu@gmail.com</a></p>
    </div>
</div>
<div className="footer-right">
    <p className="footer-company-about">
        <span>About the company</span>
        Student Union is a student organization in Tumo Labs, dedicated to social and organizational activities, provides student representation and academic support to the student community.
    </p>
    <div className="footer-icons">
        <a href="https://www.facebook.com/tumolabs/"><i className="fa fa-facebook"> <img src={"/svg/10.png"}/></i></a>
        <a href="https://www.instagram.com/tumolabs/"><i className="fa fa-instagram"> <img src={"/svg/12.png"}/></i></a>
        <a href="https://am.linkedin.com/school/tumo-labs/"><i className="fa fa-linkedin"> <img src={"/svg/11.png"}/></i></a>
        <a href="https://www.youtube.com/@tumolabs4506"><i className="fa fa-youtube"> <img src={"/svg/13.png"}/></i></a>
    </div>
</div>
</footer>
        </>
    )
}

export default Footer