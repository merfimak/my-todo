import React, {useState, useContext} from 'react'
import {ToDoContext} from './Context'



export default function TodoItem({title, id, completed}) {

/*const [checked,setChek] = useState(completed);*/
const {removeTodo, toggleTodo} = useContext(ToDoContext)




const cls = ['todo_li_item']//массив классов

if(completed){
  cls.push('completed')
}

  return (
    <li className={cls.join(' ')}>
      
        <input id={'formAgreement'+id} className="todo_checkbox" type="checkbox" checked={completed}  onChange={() => toggleTodo(id)}/>
        <label htmlFor={'formAgreement'+id} className='checkbox_label' ></label>
        <span>{title}</span>
        
   		<div className="todo_li_delete" onClick={() => removeTodo(id)}>!</div>
    </li>
  )
}