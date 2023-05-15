import React from 'react'

export const Todo = ({ category, text, id, removeTodos, complete, isCompleted }) => {
    return (
        <div>
            <div style={{ textDecoration: isCompleted ? "line-through" : "" }}>
                <p>{text}</p>
                <p>({category})</p>
            </div>
            <div>
                <button onClick={() => complete(id)}>Completar</button>
                <button onClick={() => removeTodos(id)}>x</button>
            </div>
        </div >
    )
}
