import './App.css';
import React from 'react';
import { data } from './db/data';

function App() {
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    setTodos(data);
  }, [])

  console.log(todos);
  return (
    <div className="containerApp">
      <div className="listaApp">
        <h1>Lista de tarefas</h1>
        {todos.map((todo) => (
          <div key={todo.category}>
            <div>
              <p>{todo.text}</p>
              <p>({todo.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
