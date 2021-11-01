import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  return (
    <ul className="todo_ul_list">
      {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </ul>
  )
}