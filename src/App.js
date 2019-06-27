import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App({todos}) {
  return (
    <div className="App">
      <TodoForm />
      <div className="Todo-List">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
