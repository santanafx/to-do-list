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
    <div>
      <h1>Lista de tarefas</h1>
      <div>
        {todos.map((todo) => (
          <div>
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
