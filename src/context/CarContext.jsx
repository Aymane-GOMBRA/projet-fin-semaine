import React from 'react'
import { useContext } from 'react'

export const CarsContext = React.createContext()

export const CarsProvider = ({ initialValue, children }) => {

    return (
        <CarsContext.Provider
            value={{
                ...initialValue
            }}
        >
            {children}
        </CarsContext.Provider>
    )
}

export const useCars = () => {
    const context = useContext(CarsContext)
    return context
}