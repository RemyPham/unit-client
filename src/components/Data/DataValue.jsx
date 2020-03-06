import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

import '../../styles/Data.css'

import apiHandler  from '../../api/apiHandler'

const api = new apiHandler();

export default function DataValue(props) {
    //GET THE EXO JUST FOR THE UNIT TYPE
    const [concernedExo, setConcernedExo] = useState(null)


    const [data1Value, setData1Value] = useState(null)
    const [data2Value, setData2Value] = useState(null)


    useEffect(() => {
        api
        .get(`/data/${props.exoID}`)
        .then(exo => {
            setConcernedExo(exo.data);
        })
        .catch(err => console.error(err))
    }, [props.exoID])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleValue1 = (e) => {
        setData1Value(e.target.value)
    }
    const handleValue2 = (e) => {
        setData2Value(e.target.value)
    }
    
    return concernedExo ? (
        <form className="exoTypeForm" onSubmit={handleSubmit}>
            <p>Add your data</p>
            <div className="dataContainer">
                <div className="dataBox">
                    <input
                    id="value1"
                    placeholder="0"
                    type="number"
                    onChange={handleValue1}/>
                    <label htmlFor="value1">{concernedExo.unit1Type.toUpperCase()}</label>
                </div>
                <FontAwesomeIcon
                icon={faTimes}
                size="lg"/>
                <div className="dataBox">
                    <input
                    id="value2"
                    placeholder="0"
                    type="number"
                    onChange={handleValue2}/>
                    <label htmlFor="value2">{concernedExo.unit2Type.toUpperCase()}</label>
                </div>
            </div>
            <button
            className="exoFormBtn"
            onClick={(data1Value && data2Value) ? () => props.addMood(data1Value, data2Value) : handleSubmit}>Next</button>
        </form>
    ) : <p>...loading</p>
}
