import React from 'react'
import { useState } from 'react'

const CarForm = ({ cars, setCars }) => {
    const [inputName, setInputName] = useState('')
    const [inputKm, setInputKm] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setCars([...cars, { name: inputName, km: parseFloat(inputKm) }]);
        setInputKm('')
        setInputName('')
    }
    return (
        <div>
            <h2>Ajouter une voiture</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" placeholder='Name' />
                <input onChange={e => setInputKm(e.target.value)} value={inputKm} type="number" placeholder='Km' />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default CarForm