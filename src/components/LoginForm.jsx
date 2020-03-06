import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, withRouter } from "react-router-dom";

import UserContext from "../auth/UserContext"
import apiHandler  from '../api/apiHandler'

const api = new apiHandler();

export default withRouter(function LoginForm(props) {

    // const [redirection, setRedirection] = useState(false)
    // const [loginUserInfo, setLoginUserInfo] = useState({})
    const userContext = useContext(UserContext);
    const { setCurrentUser } = userContext;

    const {register, handleSubmit} = useForm();
    const onSubmit = async data => {
        try {
            const apiRes = await api.post("/signin", data);
            setCurrentUser(apiRes.data.currentUser);
            props.history.push("/dashboard")
        } catch (err) {
            setCurrentUser(null)
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <label htmlFor="email">Email</label>
                <input ref={register({required: true})} name="email" id="email" type="email"/>
            </div>
                    
            <div className="container">
                <label htmlFor="password">Password</label>
                <input ref={register({required: true, min: 6})} name="password" id="password" type="password"/>
                    <Link to={"#"} className="forgot">forgot your password ?</Link>
            </div>

            <button className="btn">Login</button>
        </form>
    )
})
