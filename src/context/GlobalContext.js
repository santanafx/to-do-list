import React from 'react'
import { data } from '../db/data'

const initialState = {
    data,
}

const globalState = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const Context = React.createContext();

export const GlobalContext = ({ children }) => {

    const value = React.useReducer(globalState, initialState);

    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    )
}