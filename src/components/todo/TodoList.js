import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
	//console.log(props.todos.notes)
  return (
    <ul className="todo_ul_list">
      {props.todos.notes.map(item => <TodoItem key={item.id} notes={props.todos.notes} {...item} toggleNote={props.todos.toggleNote} deleteNote={props.todos.deleteNote} />)}
    </ul>
  )
}