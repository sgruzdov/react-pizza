import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { mainReducer } from './reducers/mainReducer.ts'

const reducer = combineReducers({
    main: mainReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

