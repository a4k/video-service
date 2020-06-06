import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import rootReducer from './reducers'
import api from './middleware/FilmsApi'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, api),
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
