import React, {useEffect, useState} from 'react'
import apiHandler  from '../../api/apiHandler'

import '../../styles/Data.css'

const api = new apiHandler();


export default function ExoSelection(props) {
    console.log(props)
    const [listExercise, setListExercise] = useState(null)

    const[exoSelect, setExoSelect] = useState(null)

    useEffect(() => {
        api
        .get("/exercise")
        .then(listOfExo => {
            console.log(listOfExo.data);
            setListExercise(listOfExo.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setExoSelect(e.target.value)
    }

    return listExercise ? (
        <form className="exoForm" onSubmit={handleSubmit}>
            <select defaultValue="Select..." className="exoSelector" onChange={handleChange}>
                <option value={null} disabled>Select...</option>
                {listExercise.map((exo,i) => (
                    <option value={exo._id} key={i}>{exo.title}</option>
                ))}
            </select>
            <label className="exoFormLabel">Select your exercise to update</label>
            <button
            onClick={exoSelect !== null ? () => props.addValue(exoSelect) : handleSubmit}
            className="exoFormBtn">Next</button>
        </form>
    ) : <p>...loading</p>
}
