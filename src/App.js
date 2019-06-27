import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App({ changeCurrent }) {
  return (
    <div className="App">
      <TodoForm />
      <div className="Todo-List">
        <TodoList  />
      </div>
    </div>
  );
}

export default App;
