import React from 'react';
import Calendar from "react-awesome-calendar"
import { useState } from 'react';

const Calendarevent =()=>{
    
    const [events,setevents] =useState( [{
        id: 1,
        color: '#fd3153',
        from: '2022-12-23T18:00:00+00:00',
        to: '2022-12-23T19:00:00+00:00',
        title: 'Software Sprint'
    },  ]);
    

    return(
        < div style={{width:"700px",heigth:"500px",}}>
        <Calendar  events={events}/>
        
        </ div>
    )
}

export default Calendarevent