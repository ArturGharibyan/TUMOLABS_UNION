import Calendarevent from "./Calendar"
import "../Calendar.css"
const Event = () => {

   

    return (
        <>
            <h1 className="calendar_h1">Event Calendar</h1>
        <div className="calendar">
            <Calendarevent  />
        </div>
        </>
    )
}

export default Event