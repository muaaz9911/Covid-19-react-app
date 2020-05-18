import React from 'react'
import './card.css'
import CountUp from 'react-countup';

function card(props) {
    return (
        <div className='card'>
            <div className='cardcontainer infected'>
                <h2>Confirmend Cases  </h2>
                <h1>  {props.confirmedcases.value}</h1>
                <p>Last Update at: {props.lastupdate}</p>
            </div>

          
            <div className='cardcontainer recovered'>
                <h2>Recoverd Cases  </h2>
                <h1>  {props.recoveredcases.value}</h1>
          
                  <CountUp start={0} end={props.recoveredcases.value} duration={2.75} separator="," />
                <p>Last Update at: {props.lastupdate}</p>
            </div>

            <div className='cardcontainer deaths'>
                <h2>Deaths   </h2>
                <h1> {props.deaths.value}</h1>
                <p>Last Update at: {props.lastupdate}</p>
            </div>

        </div>
        
    )
}

export default card
