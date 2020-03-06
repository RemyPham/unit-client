import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import apiHandler  from '../../api/apiHandler'



const api = new apiHandler();


export default class ExoUnitType extends Component {
    state = {
        unit1Type: "kg",
        unit2Type: "rep",
        title: this.props.siblingInfo.exerciseName,
        user: this.props.userInfo._id
    }

    
    handleSubmit = (e) => {
        e.preventDefault();

        api
        .post("/exercise", {...this.state})
        .then(res => this.props.final())
        .catch(err => console.log(err))

    }
    handleUnit1 = (e) => {
        this.setState({unit1Type: e.target.value})
    }
    handleUnit2 = (e) => {
        this.setState({unit2Type: e.target.value})
    }


    render() {
        console.log(this.state)
        console.log(this.props.userInfo._id)
        return (
            <form className="exoTypeForm" onSubmit={this.handleSubmit}>
                <p>Select unit</p>
                <div className="typeContainer">
                    <select
                    onChange={this.handleUnit1}
                    className="option">
                        <option value="kg">Kg</option>
                        <option value="cal">Cal</option>
                    </select>
                    <FontAwesomeIcon
                    icon={faTimes}/>
                    <select
                    onChange={this.handleUnit2}
                    className="option">
                        <option value="rep">Reps</option>
                        <option value="min">Min</option>
                    </select>
                </div>
                <button className="exoTypeFormBtn">Add exercise</button>
            </form>
        )
    }
}
