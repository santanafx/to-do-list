import React from 'react'

export const FormTodo = () => {

    const [category, setCategory] = React.useState('');
    const [input, setInput] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input || !category) {
            return
        }
        console.log(category, input)
    }

    return (
        <>
            <h1>Criar uma tarefa:</h1>
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
