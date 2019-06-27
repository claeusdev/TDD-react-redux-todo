import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { bindActionCreators } from "redux";
import { updateCurrent } from "./reducers/todo";

const actions = bindActionCreators(
  {
    updateCurrent
  },
  store.dispatch
);

ReactDOM.render(
  <Provider store={store}>
    <App changeCurrent={actions.updateCurrent} />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
