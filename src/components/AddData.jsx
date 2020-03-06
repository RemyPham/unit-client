import React, {useState, useContext} from 'react'
import '../styles/AddData.css'
import {useAuth} from "../auth/useAuth";
import UserContext from "./../auth/UserContext";

import ExoName from './Exo/ExoName'
// import ExoTags from './Exo/ExoTags'
import ExoUnitType from './Exo/ExoUnitType'
import ExoSelection from './Data/ExoSelection'
import DataValue from './Data/DataValue'
import DataMood from './Data/DataMood'

export default function AddData(props) {
    const {currentUser} = useAuth();
    // const userContext = useContext(UserContext);
    // const { currentUser } = userContext;
    console.log(currentUser)
    //STATE FOR EXERCISE
    const [justAState, setJustAState] = useState(true)
    // const [addTagState, setAddTagState] = useState(false)
    const [addTypeState, setAddTypeState] = useState(false)


    //STATE FOR DATA // default value : true false false
    const [dataState, setDataState] = useState(true);
    const [addExoValueState, setAddExoValueState] = useState(false);
    const [addMoodState, setAddMoodState] = useState(false);


    //STOCK FORM INFORMATION
        //EXERCISE
    const [exerciseTitle, setExerciseTitle] = useState(null);

        //DATA
    const [exoSelectedID, setExoSelectedID] = useState(null);
    const [exoValue1, setExoValue1] = useState(null);
    const [exoValue2, setExoValue2] = useState(null);
    

    const [userDataChoice, setUserDataChoice] = useState("exercise") //change here in default : "exercise"

    // const triggerAddTag = () => {
    //     setJustAState(false);
    //     setAddTagState(true);
    //     setAddTypeState(false);
    // }

    //FUNCTION EXERCISE TO SWITCH PAGE
    const triggerAddType = (exoNameInputValue) => {
        setExerciseTitle(exoNameInputValue);

        setJustAState(false);
        // setAddTagState(false);
        setAddTypeState(true);
    }
        //GO TO ADD DATA AFTER CREATING EXERCISE
    const goToData = () => {
        setUserDataChoice("data")

        setJustAState(true);
        // setAddTagState(false);
        setAddTypeState(false);
    }



    //FUNCTION DATA TO SWITCH PAGE
    const triggerValueState = (exoSelect) => {
        setExoSelectedID(exoSelect);

        setDataState(false);
        setAddExoValueState(true);
        setAddMoodState(false);
    }

    const triggerMoodState = (value1, value2) => {
        setExoValue1(value1);
        setExoValue2(value2);

        setAddExoValueState(false);
        setAddMoodState(true);
    }
        //GO TO CHART AND REFRESH
    const finalAdd = () => {
        setDataState(true);
        setAddExoValueState(false);
        setAddMoodState(false);

        props.goToChart()
    }



    return (
        <div className="addDataPage">
            <div className="dataHeader">
                <div className="whatToAdd">
                    <p
                    className={"home-link " + (userDataChoice === 'exercise' && "userChoice")}
                    onClick={() => setUserDataChoice("exercise")}>
                        Exercise
                    </p>
                    <p
                    className={"home-link " + (userDataChoice === 'data' && "userChoice")}
                    onClick={() => setUserDataChoice("data")}>
                        Data
                    </p>
                </div>
            </div>
            <div className="dataForms">
                <div>
                    {/* COMPONENT FOR EXERCISE */}
                    {(userDataChoice === "exercise" && justAState) && <ExoName addType={triggerAddType}/>}
            
                    {/* {(userDataChoice === "exercice" && addTagState) && <ExoTags addType={triggerAddType}/>} */}

                    {(userDataChoice === "exercise" && addTypeState && exerciseTitle) && <ExoUnitType userInfo={currentUser} siblingInfo={exerciseTitle} final={goToData} />}



                    {/* COMPONENT FOR DATA */}
                    {(userDataChoice === "data" && dataState) && <ExoSelection addValue={triggerValueState} userInfo={currentUser}/>}

                    {(userDataChoice === "data" && addExoValueState && exoSelectedID) && <DataValue exoID={exoSelectedID} addMood={triggerMoodState} />}


                    {/* && exoSelectedID && exoValue1 && exoValue2 */}
                    {(userDataChoice === "data" && addMoodState && exoSelectedID && exoValue1 && exoValue2) && <DataMood
                    exoID={exoSelectedID}
                    unitValue1={exoValue1}
                    unitValue2={exoValue2}
                    final={finalAdd}
                    />}
                </div>
                
            </div>
        </div>
    )
}
