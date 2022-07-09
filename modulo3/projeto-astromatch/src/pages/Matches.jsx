import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { USER } from '../constants/USER'

const Matches = () => {

    const [crushes, setCrushes] = useState([])

    const getCrushes = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${USER}/matches`)
            .then((res) => {
                setCrushes(res.data.matches)
                console.log(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCrushes()
    }, [])

    const mapCrushes = crushes.map((crush) => {
        return (
            <div>
                <img src={crush.photo} width='100px' />
                <p key={crush.id}>{crush.name}</p>
            </div>
        )
    })

    return (
        <div>
            <h3>Matches</h3>
            {mapCrushes}
        </div>
    )
}

export default Matches