import React, {useContext} from 'react'
import '../styles/UserProfile.css'
import HeaderProfile from "../components/HeaderProfile"
import {useAuth} from "../auth/useAuth";

export default function UserProfile() {

    const {currentUser} = useAuth();
 

    return (
        <div className="userProfilePage">
            <HeaderProfile userInfo={currentUser} />
            <div className="userOption">
                <div className="userInfos">
                    <p>My information</p>
                    <p>Change password</p>
                </div>

                <div className="aboutUs">
                    <p>Need help ?</p>
                    <p>About us</p>
                    <p>Recommendation</p>
                </div>

                <div className="userAccount">
                    <p>Export my datas</p>
                    <p>Reset account</p>
                </div>
            </div>
        </div>
    )
}
