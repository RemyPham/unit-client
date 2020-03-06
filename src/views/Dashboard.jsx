import React, { useContext, useEffect, useState } from "react";
import UserContext from "../auth/UserContext"
import apiHandler  from '../api/apiHandler'
import {useAuth} from "../auth/useAuth";
import { Link } from "react-router-dom";

import "../styles/Dashboard.css"

import FooterUser from '../components/FooterUser'
import Empty from '../components/Empty'
import AddData from '../components/AddData'
import Graph from '../components/Graph'
import UserProfile from '../components/UserProfile'

const api = new apiHandler();

export default function Dashboard(props) {
    const userContext = useContext(UserContext);
    const { currentUser } = userContext;
    // const {currentUser} = useAuth();
    console.log(currentUser)

    
    const [iconSelect, setIconSelect] = useState("chart")
    const [exercises, setExercises] = useState(null)
    
    useEffect(() => {
        api
        .get("/dashboard")
        .then(userExercise => {
            console.log(userExercise)
            if (userExercise.data.length === 0) {
                setExercises(null)
            } else
            setExercises(userExercise.data);
        })
        .catch(err => console.log(err))
    }, [])
    

    const redirectToAddData = () => {
        setIconSelect("add")
    }

    const triggerChart = () => {
        setIconSelect("chart");
        window.location.reload(false)
    }


    return iconSelect === "chart" ? (
        exercises ? (
            <div className="page">
                <div className="graphContainer">
                    {exercises.map((exercise,i) => (
                        <Link className="link" to={"/dashboard/"+ exercise._id} key={i}>
                            <div className="graphBox" >
                                <div>
                                <p className="graphTitle">{exercise.title}</p>
                                    <p>{exercise.data.date}</p>
                                </div>
                                <Graph exercisesInfos={exercise} />
                            </div>
                        </Link>
                    ))}
                </div>
                
                <FooterUser selection={iconSelect} handleIconState={e => setIconSelect(e)} />
            </div>
        ) : (
            <div className="page">
                <Empty addFirstExercise={redirectToAddData} />
            
                <FooterUser selection={iconSelect} handleIconState={e => setIconSelect(e)} />
            </div>
        )


    ) : iconSelect === "add" ? (
        <div className="page">
            <AddData goToChart={triggerChart} />
            <FooterUser selection={iconSelect} handleIconState={e => setIconSelect(e)} />
        </div>




    ) : (
        <div className="page">
            <UserProfile />
            <FooterUser selection={iconSelect} handleIconState={e => setIconSelect(e)} />
        </div>
    )

}
