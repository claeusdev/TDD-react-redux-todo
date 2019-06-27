import React from "react";
import { connect } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { updateCurrent } from "./reducers/todo";

function App({ todos, currentTodo, changeCurrent }) {
  return (
    <div className="App">
      <TodoForm currentTodo={currentTodo} changeCurrent={changeCurrent} />
      <div className="Todo-List">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

const mapDispatchToProps = { changeCurrent: updateCurrent };
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
