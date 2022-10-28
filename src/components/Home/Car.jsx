import React from 'react'
import { useState } from 'react';
import { useCars } from '../../context/CarContext';

const Car = ({ car, index }) => {
    const [toogle, setToogle] = useState(false)
    const { cars, setCars } = useCars()
    const [inputEditKm, setInputEditKm] = useState('')
    const [bgColor, setBgColor] = useState('')

    const handleClick = () => {
        const newArray = [...cars]
        newArray.splice(index, 1)
        setCars(newArray)
    }
    const handleSubmitEdit = e => {
        e.preventDefault()
        const newArrayEdit = [...cars]
        // setCars([...cars[index].km], parseFloat(inputEditKm))
        // setCars([newArrayEdit[index], { name: newArrayEdit[index].name, km: parseFloat(inputEditKm) }]);
        newArrayEdit.splice(e, 1, {
            name: newArrayEdit[index].name,
            km: inputEditKm
        })
        setCars(newArrayEdit)
        setInputEditKm('')
        setToogle(!toogle)
    }
    const backgroundColor = () => {
        car.km > 50000 && (setBgColor("green")) : setBgColor("black")
    }

    return (
        <div style={{
            color: 'white',
            textAlign: 'center',
            padding: '5px',
            margin: '30px',
            width: '200px',
            backgroundColor: ,
            border: 'solid black 1px'
        }}>
            {car.name} {car.km}km
            <div>
                <button onClick={handleClick}>delete</button>
                <button onClick={() => setToogle(!toogle)}>edit</button>
            </div>

            {
                toogle &&
                <div>
                    <form onSubmit={handleSubmitEdit}>
                        <input placeholder='Kilométrage' onChange={e => setInputEditKm(e.target.value)} value={inputEditKm} type="text" name="" id="" />
                        <button type="submit">Editer</button>
                    </form>

                </div>
            }
        </div>
    )
}

export default Car