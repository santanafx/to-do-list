import React from 'react'
import { data } from '../db/data'

const initialState = {
    key: 0,
    data,
}

const globalState = (state, action) => {
    switch (action.type) {
        case 'COMPRIMENTO_DATA':
            const data = action.payload.data;

            return {
                ...state,
                key: data,
            }

        // case 'ADD_ELEMENTO':
        //     const input = action.payload.input;
        //     const category = action.payload.category;


        //     console.log(state.data)

        //     return {
        //         ...state,
        //         state.data.input
        //         state.data.category
        //     }
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