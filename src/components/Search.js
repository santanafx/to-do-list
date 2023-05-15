import React from 'react'

export const Search = ({ search, setSearch }) => {
    return (
        <div>
            <input type="text" placeholder='Procure a tarefa' value={search} onChange={event => setSearch(event.target.value)} />
        </div>
    )
}
