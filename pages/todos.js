import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/action/todos';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);

  const [todo, setTodo] = useState('');
  const handleAddTodo = (e) => {
    dispatch(
      addTodo({
        id: Date.now(),
        text: todo,
      })
    );
    setTodo('');
  };

  const handleDeleteTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };
  console.log(todos);
  return (
    <div>
      <h1>todo</h1>
      {todos && todos.data.length > 0 ? (
        todos.data.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p>{todo.text}</p>
            <button onClick={handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>
          <p>Loading</p>
        </div>
      )}
      <div>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>sumbit</button>
      </div>
    </div>
  );
};

export default Todos;
