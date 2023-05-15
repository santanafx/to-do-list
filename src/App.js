import './App.css';
import React from 'react';
import { Todo } from './components/Todo';
import { FormTodo } from './components/FormTodo';
import { Context } from './context/GlobalContext';
import { Search } from './components/Search';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [globalState, dispatch] = React.useContext(Context);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    setTodos(globalState.data);

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
  }

  const removeTodos = (id) => {
    const filterTodos = [...todos];
    const newFilterTodos = filterTodos.filter(todos => todos.id === id ? null : todos);
    globalState.data = newFilterTodos;
    setTodos(newFilterTodos);
  }

  const complete = (id) => {
    const completeTodos = [...todos];
    completeTodos.map(todos => todos.id === id ? todos.isCompleted = !todos.isCompleted : todos)
    globalState.data = completeTodos;
    setTodos(completeTodos);
  }

  return (
    <div className="containerApp">
      <div className="listaApp">
        <h1>Lista de tarefas:</h1>
        <hr style={{
          height: '1px',
          background: 'black',
          marginBottom: '20px'
        }} />
        <h4>Procure por uma tarefa:</h4>
        <Search search={search} setSearch={setSearch} />
        <hr style={{
          height: '1px',
          background: 'black',
          marginBottom: '20px',
          marginTop: '10px'
        }} />
        {todos
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .map((todo) => (
            <Todo key={todo.id} category={todo.category} text={todo.text} id={todo.id} removeTodos={removeTodos} complete={complete} isCompleted={todo.isCompleted} />
          ))}
        <FormTodo addTodos={addTodos} />
      </div>
    </div>
  );
}

export default App;
