import React, { Component } from 'react'
import "../../styles/Exo.css"

export default class ExoName extends Component {
    state = {
        exerciseName: null
    }

    updateName = (e) => {
        this.setState({exerciseName: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form className="exoForm" onSubmit={this.handleSubmit}>
                <input
                type="text"
                id="exerciseName"
                name="exerciseName"
                placeholder="Exercise name"
                className="exoFormInput"
                onChange={this.updateName}
                />
                <hr />
                <label htmlFor="exerciseName" className="exoFormLabel">Type the name of the exercise</label>
                <button
                onClick={() => this.props.addType(this.state)}
                className="exoFormBtn">Validate name</button>
            </form>
        )
    }
}


