import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Studentclub = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 2000
        })
    }, [])

    return (
        <>
            <div data-aos="zoom-in-up" className="studentclub">
                <h1>Student Club</h1>
                <div data-aos="zoom-in-up">
                    <h3>Peer mentoring</h3>
                    <div><img src="/img/p.png" /></div>
                    <p>The Program is created to support first-year students to be fluently and effectively involved in the new, student life, and to provide an enjoyable first-year experience at the university. Peer mentors support first-year students by delivering information, guidance, and encouragement.
                    </p>
                    <h3 style={{ fontSize: "23px" }}>To become a peer mentor, a student must:</h3>
                    <p >Be involved Tumo Labs Loops </p>
                    <ul>
                        <li style={{ position: "relative", left: "10px" }}>Peer mentor can receive extra Token</li>
                    </ul>
                </div>
                <div data-aos="zoom-in-up">
                    <h3>League of Volunteers  </h3>
                    <div><img src="/img/v.png" /></div>
                    <p>Tumo Labs encourages student activity and social involvement.
                        The university organizes a great number of events, and very often, we open the call for volunteers.</p>

                    <h5>Why become a volunteer?</h5>
                    <br />
                    <p>To be involved in social and student life
                        You will get a certificate after each 5th participation in Tumo Labs
                        organizational processes or events
                        You will get a T-shirt with Tumo Labs logo
                        You will get one of the prizes ( cup, bag, cap with university logo)
                    </p>
                </div>
                <div data-aos="zoom-in-up" >
                    <h3>Sports Club </h3>
                    <div><img src="/img/s.png" /></div>
                    <p>Hey! if you lead an active and healthy lifestyle, our sports club is just for you.
                        <br />
                        <br />

                        We organize volleyball, football, chess, basketball and various other team and individual games and competitions.
                    </p>
                </div>
                <div data-aos="zoom-in-up">
                    <h3>Reading Club </h3>
                    <div><img src="/img/r.png" /></div>
                    <p>Our goal is to form a reading community where we can organize book discussions, reading marathons, books' quizzes.
                        <br />
                        <br />

                        To everyone who likes reading, join us on the 1st floor of the campus every Tuesday at 5 pm.
                    </p>
                </div>
                <div data-aos="zoom-in-up">
                    <h3>Music club</h3>
                    <div><img src="/img/m.png" /></div>
                    <p>Hey, listen to the music, feel the rhythm and join the song!
                        <br />
                        <br />
                        Music club is a platform for talented students who sing or play musical instruments to demonstrate their talent and for the students who want to explore their potential.
                        <br />
                        <br />
                        If music is your passion and you dream to start singing or playing, Music Club is the right stage.
                    </p>
                </div>
                <div data-aos="zoom-in-up">
                    <h3>Debate and Rhetoric club </h3>
                    <div><img src="/img/dr.png" /></div>
                    <p>Debate is a fantastic way to develop students' analytic and critical thinking skills. It is a civil way to speak out your opinion enriching the speech with reasonable arguments with respect related to the opponents.
                        <br />
                        <br />

                        Rhetoric club is a part of the debate club. It is an art of persuasion. During our club, we are planning to have many practice sessions and “Speech Duels.”
                        The club aims is to help students to improve their communication and presentation skills, to negotiate and deliver reasonable arguments which will be helpful in the study process and in life.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Studentclub