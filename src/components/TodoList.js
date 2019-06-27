import React from "react";

function Todo({id, name, isComplete}) {
    return <li key={id}>
      <input type="checkbox" defaultChecked={isComplete} /> {name}
    </li>;
}
function TodoList({todos}) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo  {...todo} key={todo.id}/>
      ))}
    </ul>
  );
}

export default TodoList;
