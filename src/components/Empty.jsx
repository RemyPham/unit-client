import React, {useContext} from 'react'
import UserContext from "./../auth/UserContext";

import '../styles/Empty.css'

export default function Empty(props) {
    const userContext = useContext(UserContext);
    const { currentUser } = userContext;
    
    return (
        <div className="emptyPage">
            <div className="emptyTitle">
                <span>Welcome {currentUser.username}</span>
                <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/person-raising-both-hands-in-celebration_emoji-modifier-fitzpatrick-type-1-2_1f64c-1f3fb_1f3fb.png" alt="hands up" className="handsEmoji" /> 
            </div>

            <p className="emptyText">You have no tracked exercise yet.</p>
            <p className="emptyText">Add your first now !</p>

            <button onClick={props.addFirstExercise} className="btn">Add my first exercise</button>
            
        </div>
    )
}
