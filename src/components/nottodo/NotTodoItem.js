import React from 'react'




export default function NotTodoItem(props) {

    let toggleNotTodo = () => {
        //console.log(props.id)
        props.toggleNotTodo(props.id)
    }


    const cls = ['todo_li_item'] //массив классов

    if (props.completed) {
        cls.push('completed')
    }

    return ( <
        li className = { cls.join(' ') } >

        <
        input id = { 'formAgreement' + props.id }
        className = "todo_checkbox"
        type = "checkbox"
        checked = { props.completed }
        onChange = { toggleNotTodo }
        /> <
        label htmlFor = { 'formAgreement' + props.id }
        className = 'checkbox_label' > < /label> <
        span > { props.title } < /span> <
        /li>
    )
}