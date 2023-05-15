import React from 'react'

export const FormTodo = ({ addTodos }) => {

    const [category, setCategory] = React.useState('');
    const [input, setInput] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input || !category) {
            return
        }
        addTodos(input, category);
    }

    return (
        <>
            <hr style={{
                height: '1px',
                background: 'black',
                marginBottom: '10px',
                marginTop: '10px'
            }} />
            <h1>Criar uma tarefa:</h1>
            <hr style={{
                height: '1px',
                background: 'black',
                marginBottom: '20px'
            }} />
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(event) => (setInput(event.target.value))} type="text" placeholder='Digite um título' />
                <select value={category} onChange={(event) => (setCategory(event.target.value))}>
                    <option value="" ></option>
                    <option value="Trabalho" >Trabalho</option>
                    <option value="Pessoal" >Pessoal</option>
                    <option value="Estudos" >Estudos</option>
                </select>
                <button>Criar tarefa</button>
            </form>
        </>
    )
}
