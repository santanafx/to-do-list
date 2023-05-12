import React from 'react'

export const Todo = ({ category, text }) => {
    return (
        <div>
            <div>
                <p>{text}</p>
                <p>({category})</p>
            </div>
            <div>
                <button>Completar</button>
                <button>x</button>
            </div>
        </div>
    )
}
