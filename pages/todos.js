import React from 'react';
import { useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector((store) => store.todos);
  console.log(todos);
  return (
    <div>
      <h1>todo</h1>
      {todos.data.length > 0 ? (
        todos.data.map((todo) => <p key={todo.id}>{todo.text}</p>)
      ) : (
        <div>
          <p>Loading</p>
        </div>
      )}
    </div>
  );
};

export default Todos;
