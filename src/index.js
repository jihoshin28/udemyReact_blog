import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'

let store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store = {createStore(store)}>
        <App/>
    </Provider>, document.querySelector('#root')
)