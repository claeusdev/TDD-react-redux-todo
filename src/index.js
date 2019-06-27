import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import {bindActionCreators} from "redux"
import { updateCurrent } from "./reducers/todo";


const actions = bindActionCreators({
    updateCurrent
}, store.dispatch)

function render() {
  const state = store.getState();

  ReactDOM.render(
    <App
      todos={state.todos}
      changeCurrent={actions.updateCurrent}
      currentTodo={state.currentTodo}
    />,
    document.getElementById("root")
  );
}
render();

store.subscribe(render);

serviceWorker.unregister();
