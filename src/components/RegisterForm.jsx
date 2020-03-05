import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import apiHandler  from '../api/apiHandler'

const api = new apiHandler();

export default function RegisterForm() {
    const [eye, setEye] = useState(false)

    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
        api
        .post("/signup", data)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }


    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <label htmlFor="username">Username</label>
                <input ref={register({required: true, min: 3})} name="username" id="username" type="text"/>
            </div>

            <div className="container">
                <label htmlFor="email">Email</label>
                <input ref={register({required: true})} name="email" id="email" type="email"/>
            </div>
                    
            <div className="container">
                <label htmlFor="password">Password</label>
                <input ref={register({required: true, min: 6})} name="password" id="password" type={eye ? "text" : "password"}/>
                <FontAwesomeIcon
                onClick={() => setEye(!eye)}
                className="icon"
                icon={eye ? faEye : faEyeSlash} />
            </div>

            <button className="btn">Register</button>
        </form>
    )
}
