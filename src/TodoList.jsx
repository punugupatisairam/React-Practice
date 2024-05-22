import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleMarkTodoDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleEditTodo = (id, text) => {
    setTodoEditing(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setTodoEditing(null);
    setEditText('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(e.target.elements.newTodo.value);
        e.target.elements.newTodo.value = '';
      }}>
        <input type="text" id="newTodo" placeholder="Add a new todo..." />
        <button type="submit">Add</button>
      </form>
      <ul style={{listStyleType:'none'}}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todoEditing === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              >
                {todo.text}
              </span>
            )}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleMarkTodoDone(todo.id)}>
              {todo.done ? 'Undo' : 'Done'}
            </button>
            {todoEditing !== todo.id && (
              <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                Edit
              </button>
            )}
            {todoEditing === todo.id && (
              <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
