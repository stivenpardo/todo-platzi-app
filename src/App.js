import React from 'react';
import { TodoCounter } from './TodoCounterComponent/TodoCounter';
import { TodoSearch } from './TodoSearchComponent/TodoSearch'
import { TodoList } from './TodoListComponent/TodoList'
import { TodoItem } from './TodoItem'

const todos = [
  { text: 'Cut onion', completed: false },
  { text: 'Take the course of intro react', completed: false },
  { text: 'Training workout', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
      <button>+</button>
    </React.Fragment>
  );
}

export default App;