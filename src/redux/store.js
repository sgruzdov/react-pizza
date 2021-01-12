import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { pizzasReducer } from './reducers/pizzasReducer.ts'
import { typesReducer } from './reducers/typesReducer'
import { filtersReducer } from './reducers/filtersReducer'

const reducer = combineReducers({
    pizzas: pizzasReducer,
    types: typesReducer,
    filters: filtersReducer
})


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

