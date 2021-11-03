import React from 'react'




export default function TodoItem(props) {

let deleteNote = () =>{
	props.deleteNote(props.id)
}

let toggleNote = () =>{
	props.toggleNote(props.id)
}

const cls = ['todo_li_item']//массив классов

if(props.completed){
  cls.push('completed')
}

  return (
    <li className={cls.join(' ')}>
      
        <input id={'formAgreement'+props.id} className="todo_checkbox" type="checkbox" checked={props.completed} onChange={toggleNote}/>
        <label htmlFor={'formAgreement'+props.id} className='checkbox_label' ></label>
        <span>{props.title}</span>
   		<div className="todo_li_delete" onClick={deleteNote}>!</div>
    </li>
  )
}