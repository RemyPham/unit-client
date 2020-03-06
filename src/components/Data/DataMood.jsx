import React, { Component } from 'react'

import apiHandler  from '../../api/apiHandler'


const api = new apiHandler();

export default class DataMood extends Component {
    state = {
        unit1Data: this.props.unitValue1,
        unit2Data: this.props.unitValue2,
    }

    handleChange = (e) => {
        this.setState({mood: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        api
        .patch(`/data/${this.props.exoID}`, {
            unit1Data: this.state.unit1Data,
            unit2Data: this.state.unit2Data,
            mood: this.state.mood
        })
        .then(res => this.props.final())
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.props.exoID)
        console.log(this.state)
        return (
            <form className="exoTypeForm" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <p className="moodTitle">How are you feeling today ?</p>
                <div className="moodContainer">
                    <div className={"moodBox " + (this.state.mood === "bad" && "moodSelected")}>
                    <label htmlFor="bad">
                        <p className="moodWord">Bad</p>
                        <img className="moodEmoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/dizzy-face_1f635.png" alt="dizzy face" />
                        </label>
                        <input className="isHidden" id="bad" name="mood" value="bad" type="radio" />
                    </div>
                    
                    <div className={"moodBox " + (this.state.mood === "ok" && "moodSelected")}>
                        <label htmlFor="ok">
                            <p className="moodWord">Ok</p>
                            <img className="moodEmoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/disappointed-face_1f61e.png" alt="ok face" />
                        </label>
                        <input className="isHidden" id="ok" name="mood" value="ok" type="radio" />
                    </div>
                    
                    <div className={"moodBox " + (this.state.mood === "good" && "moodSelected")}>
                        <label htmlFor="good">
                            <p className="moodWord">Good</p>
                            <img className="moodEmoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/ok-hand-sign_1f44c.png" alt="ok hand" />
                        </label>
                        <input className="isHidden" id="good" value="good" name="mood" type="radio" />
                    </div>
                    
                    <div className={"moodBox " + (this.state.mood === "easy" && "moodSelected")}>
                        <label htmlFor="easy">
                            <p className="moodWord">Easy</p>
                            <img className="moodEmoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/victory-hand_270c.png" alt="victory hand" />
                        </label>
                        <input className="isHidden" id="easy" value="easy" name="mood" type="radio" />
                    </div>
                </div>
                
                <button className="exoFormBtn">End session</button>
            </form>
        )
    }
}
