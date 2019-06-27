import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const state = store.getState()

ReactDOM.render(<App  {...state}/>, document.getElementById('root'));
serviceWorker.unregister();
