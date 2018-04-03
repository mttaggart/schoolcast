import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./store";
import AuthContainer from './containers/AuthContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <AuthContainer /> 
    </Provider>,document.getElementById('root')
);
registerServiceWorker();
