import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App({todos, currentTodo, changeCurrent}) {
  return (
    <div className="App">
      <TodoForm currentTodo={currentTodo} changeCurrent={changeCurrent}/>
      <div className="Todo-List">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
