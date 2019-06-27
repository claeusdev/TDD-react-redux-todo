import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { updateCurrent } from "./reducers/todo";

function todoChangeHandler(val) {
  return store.dispatch(updateCurrent(val));
}

function render() {
  const state = store.getState();

  ReactDOM.render(
    <App
      todos={state.todos}
      changeCurrent={todoChangeHandler}
      currentTodo={state.currentTodo}
    />,
    document.getElementById("root")
  );
}
render();

store.subscribe(render);

serviceWorker.unregister();
