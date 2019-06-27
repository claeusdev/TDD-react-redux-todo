import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const state = {
  todos: [
    { id: 1, name: "Go to work", isComplete: true },
    { id: 2, name: "Do some work", isComplete: true },
    {id: 3, name: "close from  work", isComplete: false}
  ]
};
ReactDOM.render(<App  todos={state.todos}/>, document.getElementById('root'));
serviceWorker.unregister();
