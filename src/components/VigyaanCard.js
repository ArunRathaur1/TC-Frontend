import React from 'react'
import "./VigyaanCard.css"
import rocket from "../assets/images/rocket.png"

const VigyaanCard = (props) => {
  return (
    <div className='vigyaan--card'>
        <div>
            <h4>
                {props.branch}
            </h4>
        </div>
        <div>
        <h3>{props.team1}</h3>
        <h3>{props.team2}</h3>
        <h3>{props.team3}</h3>
        <h3>{props.team4}</h3>
        <h3>{props.team5}</h3>
        <h3>{props.team6}</h3>
        <h3>{props.team7}</h3>
        <h3>{props.team8}</h3>
        </div>
    </div>
  )
}

export default VigyaanCard