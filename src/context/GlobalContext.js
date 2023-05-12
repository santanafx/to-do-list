import React from 'react'

const initialState = {
    key: 0,
}

const globalState = (state, action) => {
    switch (action.type) {
        case 'COMPRIMENTO_DATA':
            const data = action.payload.data;

            return {
                ...state,
                key: data,
            }
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