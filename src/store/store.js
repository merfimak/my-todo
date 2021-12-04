import { createStore } from 'redux';
import { combineReducers } from 'redux';
import {todoReducer} from './redusers/todoReducer.js'
import {notTodoReducer} from './redusers/notTodoReducer.js'
import {headerReducer} from './redusers/headerReducer.js'
import {usersReducer} from './redusers/usersReducer.js'


let redusers = combineReducers({
	todo: todoReducer,
	notTodo: notTodoReducer,
	header: headerReducer,
	users: usersReducer,
})


const store = createStore(redusers)


window.store = store

export default store;