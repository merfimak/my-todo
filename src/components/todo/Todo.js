import React, {useEffect} from 'react';
import TodoList from './TodoList'
import { connect } from 'react-redux';
import { setNotesActionCreator } from '../../store/redusers/todoReducer.js'
import { addNewNoteActionCreator } from '../../store/redusers/todoReducer.js'
import { setNewNoteTextActionCreator } from '../../store/redusers/todoReducer.js'
import { deleteNoteActionCreator } from '../../store/redusers/todoReducer.js'
import { toggleNoteActionCreator } from '../../store/redusers/todoReducer.js'

function Todo(props) {
//console.log(props.notes)

useEffect(() =>{
  const row = localStorage.getItem('todos') || [];
  props.setNotes(JSON.parse(row))
}, [])//сработатет только один раз как componentDidMount


let updateNoteText = (text) =>{
  props.setNewNoteText(text)
}

let addNewNote = (event) =>{
  let newNote = { id: Date.now(), title: event.target.value,completed: false}
  if(event.key === 'Enter'){
     props.addNewNote(newNote);   
      }
  //localStorage.setItem('todos', JSON.stringify([...props.notes, newNote]))//добавляем в localStorage старый масив + новый элемент
}

useEffect(() =>{
  localStorage.setItem('todos', JSON.stringify(props.notes))
}, [props])



  return (
       
            <div className="Todo">
        		 <div className="container">
              		 <h1 className="todo_title">Todo app</h1>

        		  <div className="input-field">
                    <input type="text" className="form_input" value={props.text} onChange={event =>updateNoteText(event.target.value)}  
                    onKeyPress={addNewNote} placeholder="Введите заметку"/>
              </div>

                  {<TodoList todos={props} />}
        		</div>
            </div>
    
  );
  
}

let mapStateToProps = (state) =>{
  //console.log(state)
  return{
    notes: state.todo.notes,
    text: state.todo.NoteText,
  }
}


let mapDispatchToProps = (dispatch) =>{
  return{
   setNotes: (notes) => {
      dispatch(setNotesActionCreator(notes));
    },
    addNewNote: (item) => {
      dispatch(addNewNoteActionCreator(item));
    },
    setNewNoteText: (NewNoteText) => {
      dispatch(setNewNoteTextActionCreator(NewNoteText));
    },
    deleteNote: (id) => {
      dispatch(deleteNoteActionCreator(id));
    },
    toggleNote: (id) => {
      dispatch(toggleNoteActionCreator(id));
    }
  }
}

   const TodoContainer = connect(mapStateToProps,mapDispatchToProps)(Todo);

  export default TodoContainer;
