import './App.css';
import React from 'react';
import { data } from './db/data';
import { Todo } from './components/Todo';
import { FormTodo } from './components/FormTodo';
import { Context } from './context/GlobalContext';


function App() {
  const [todos, setTodos] = React.useState([]);
  const [globalState, dispatch] = React.useContext(Context);

  React.useEffect(() => {
    setTodos(data);
    console.log(data.length)
    dispatch({
      type: 'COMPRIMENTO_DATA',
      payload: { data: data.length }
    })
  }, [])

  console.log(globalState)

  return (
    <div className="containerApp">
      <div className="listaApp">
        <h1>Lista de tarefas:</h1>
        {todos.map((todo) => (
          <Todo key={todo.category + todo.id} category={todo.category} text={todo.text} />
        ))}
        <FormTodo />
      </div>
    </div>
  );
}

export default App;
