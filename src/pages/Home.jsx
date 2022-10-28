import React from 'react'
import { useState } from 'react'
import CarForm from '../components/Home/CarForm'
import CarList from '../components/Home/CarList'
import { CarsProvider } from '../context/CarContext'


const Home = () => {
    const [cars, setCars] = useState([])


    const handleClick = () => {

        // cars.map((car, i) => (
        //     car.km > 120000 && (
        //         newArray.splice(i, 1),
        //         console.log(newArray)
        //     )
        // ))
        let newArray = [...cars]
        cars.forEach((element, index) => {

            element.km > 120000 && (
                newArray.splice(index, 1)
            )
        })
        setCars(newArray)
    }

    return (
        <CarsProvider
            initialValue={{
                setCars,
                cars
            }}
        >
            <div>
                <h1>Home</h1>
                <CarForm cars={cars} setCars={setCars} />
                <CarList cars={cars} />
                <button onClick={handleClick}>Supprimer</button>
            </div>
        </CarsProvider>
    )
}

export default Home