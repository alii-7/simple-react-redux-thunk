import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import index from "./js/index"
import { Provider } from "react-redux";
import store from "./js/store/index";
import * as serviceWorker from './serviceWorker';

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
