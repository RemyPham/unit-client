import React, { useState }  from 'react';
//components
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm"

//img
import whiteLogo from "../assets/img/unit-white.svg";

//styles
import "../styles/Home.css";

export default function Home() {
    const [isSelected, setIsSelected] = useState("login")


    return (
        <div className="form-page">
            <div className="home-header">
                <img src={whiteLogo} className="home-logo" alt="whiteLogo" />
                <div className="link-container">
                    <p
                    onClick={() => setIsSelected("login")}
                    className={"home-link " + 
                    (isSelected === "login" && "selected")}>
                        Login
                    </p>
                    <p
                    onClick={() => setIsSelected("register")}
                    className={"home-link " + 
                    (isSelected === "register" && "selected")}>
                        Register
                    </p>
                </div>
            </div>

            <div className="home-content">
                {(isSelected === "login" ? <LoginForm /> : <RegisterForm />)}

            </div>
        </div>
    )
}
