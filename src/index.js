import React from 'react';
import 'rxjs';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import AppReducer from './reducers';
import {render} from 'react-dom';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const epicMiddleware = createEpicMiddleware(rootEpic);
let store = createStore(
    AppReducer,
    applyMiddleware(epicMiddleware)
)
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
