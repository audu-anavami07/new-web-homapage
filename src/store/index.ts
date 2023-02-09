import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gameReducer, { State } from './reducers'

export const store = createStore(gameReducer, applyMiddleware(thunk));