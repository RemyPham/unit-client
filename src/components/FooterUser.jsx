import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartArea} from '@fortawesome/free-solid-svg-icons'
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons'
import {faUserCircle} from '@fortawesome/free-regular-svg-icons'

import '../styles/FooterUser.css'

export default function FooterUser(props) {
    

    return (
        <div className="footerUser">
            <FontAwesomeIcon 
            onClick={() => props.handleIconState("chart")}
            name="chart"
            className={"footerIcon " + 
            (props.selection === "chart" && "red")}
            icon={faChartArea}/>


            <FontAwesomeIcon 
            onClick={() => props.handleIconState("add")}
            name="add"
            className={"footerIcon " + 
            (props.selection === "add" && "red")}
            icon={faPlusSquare}/>


            <FontAwesomeIcon 
            onClick={() => props.handleIconState("profile")}
            name="profile"
            className={"footerIcon " + 
            (props.selection === "profile" && "red")}
            icon={faUserCircle}/>
        </div>
    )
}
