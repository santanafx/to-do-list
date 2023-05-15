import React from 'react'

export const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div>
            <h4>Filtrar:</h4>
            <select value={filter} onChange={event => setFilter(event.target.value)}>
                <option value="All">Todas</option>
                <option value="Complete">Completas</option>
                <option value="Incomplete">Incompletas</option>
            </select>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort('Asc')}>Ascendente</button>
                <button onClick={() => setSort('Desc')}>Descendente</button>
            </div>
        </div>
    )
}
