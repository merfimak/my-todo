import React, {Component, useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoList from './TodoList'
import {ToDoContext} from './Context'

export default function App() {



/*const[todos, setTodos] = useState([
      {id: 1, title: 'First todo', completed: false},
      {id: 2, title: 'Second todo', completed: true},
    ])*/


const[todos, setTodos] = useState([])
const [todoTitle, settodoTitle] = useState('')
const addTodo = event => {
      if(event.key === 'Enter'){
        setTodos([...todos, 
                    {
                      id: Date.now(),
                      title: todoTitle,
                      completed: false
                    }
                 ])
        settodoTitle('')
      }
  }
useEffect(() =>{
  const row = localStorage.getItem('todos') || [];
  setTodos(JSON.parse(row))
}, [])//сработатет только один раз как componentDidMount

useEffect(() =>{
  localStorage.setItem('todos', JSON.stringify(todos))//Метод JSON.stringify() преобразует значение JavaScript в строку JSON, 
}, [todos])// сработатет каждый раз когда измениться добоаляется новый элимент в массив todos


  const removeTodo = id => {
    setTodos(todos.filter(todo =>{//Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
        return todo.id != id
      }))
  }
  
 const toggleTodo = id => {
  setTodos(todos.map( todo => {
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo
  }))
 }


  return (
        <ToDoContext.Provider value={{
              removeTodo, toggleTodo
            }}>
            <div className="App">
        		 <div className="container">
              		 <h1 className="todo_title">Todo app</h1>

              		  <div className="input-field">
                          <input type="text" className="form_input" value={todoTitle} onChange={event =>settodoTitle(event.target.value)}  onKeyPress={addTodo} placeholder="Введите заметку"/>
                        </div>

                  <TodoList todos={todos} />
        		</div>
            </div>
      </ToDoContext.Provider>
  );
  
}


