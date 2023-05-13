import './App.css';
import React from 'react';
import { Todo } from './components/Todo';
import { FormTodo } from './components/FormTodo';
import { Context } from './context/GlobalContext';


function App() {
  const [todos, setTodos] = React.useState([]);
  const [globalState, dispatch] = React.useContext(Context);

  React.useEffect(() => {
    setTodos(globalState.data);
    dispatch({
      type: 'COMPRIMENTO_DATA',
      payload: { data: globalState.data.length }
    })
  }, [todos])

  const addTodos = (input, category) => {
    const newData = {
      id: globalState.data.length + 1,
      text: input,
      category: category,
      isCompleted: false,
    }
    globalState.data = [...globalState.data,
      newData
    ]
    setTodos(globalState.data);
    console.log(globalState.data)
  }

  return (
    <div className="containerApp">
      <div className="listaApp">
        <h1>Lista de tarefas:</h1>
        {todos.map((todo) => (
          <Todo key={todo.id} category={todo.category} text={todo.text} />
        ))}
        <FormTodo addTodos={addTodos} />
      </div>
    </div>
  );
}

export default App;
