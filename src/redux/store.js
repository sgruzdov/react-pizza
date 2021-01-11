import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { pizzasReducer } from './reducers/pizzasReducer.ts'

const reducer = combineReducers({
    pizzas: pizzasReducer
})


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

