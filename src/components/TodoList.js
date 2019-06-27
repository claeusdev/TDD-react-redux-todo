import React from "react";
import { connect } from "react-redux";

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

function mapStateToProps(state){
  return {todos: state.todos}
}
export default connect(mapStateToProps)(TodoList);
