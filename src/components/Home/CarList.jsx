import React from 'react'
import Car from './Car'

const CarList = ({ cars }) => {
    return (
        <div>
            <h1>Liste</h1>
            {
                cars.map((car, i) => (

                    <Car key={i} car={car} index={i} />

                ))
            }

        </div>
    )
}

export default CarList