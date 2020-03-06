import React from 'react'

import '../styles/HeaderProfile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export default function HeaderProfile(props) {
    console.log("ici", props)
    return (
        <div className="headerProfile">
            <div>
                <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrowIcon"
                />
             </div>
            <div>
                {props.userInfo.username}
            </div>
        </div>
    )
}
