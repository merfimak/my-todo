import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NotTodoItem from './NotTodoItem'
import { toggleNoteActionCreator } from '../../store/redusers/notTodoReducer.js'
import { toggleCollorActionCreator } from '../../store/redusers/notTodoReducer.js'



function Nottodo(props) {


// выбераем цвет 
useEffect(() =>{
let colors  = ["black", "red", "brown", "grey", "white"]
// число соответствует порядковому номеру в массиве
let coloredit = 4;
props.notTodos.forEach(element =>{
	if(!element.completed){
		coloredit--;
	}
});
let a = colors[coloredit]
props.toggleColor(a)
}, [props.notTodos])

const cls = ['nottodo']//массив классов
cls.push(props.color)

  return (
        
            <div className={cls.join(' ')}>
        		<div className="Todo">
        		 <div className="container">
              		 <h1 className="todo_title">Not Todo app</h1>
                  <ul className="todo_ul_list">
                   {props.notTodos.map(item => <NotTodoItem key={item.id} {...item} toggleNotTodo={props.toggleNotTodo}/>)}
			      </ul>
        		</div>
            </div>
            </div>
  );
  
}


let mapStateToProps = (state) =>{
  //console.log(state)
  return{
    notTodos: state.notTodo.notTodos,
    color: state.notTodo.color,
  }
}


let mapDispatchToProps = (dispatch) =>{
  return{
    toggleNotTodo: (id) => {
      dispatch(toggleNoteActionCreator(id));
    },
     toggleColor: (color) => {
      dispatch(toggleCollorActionCreator(color));
    }
  }
}

   const NottodoContainer = connect(mapStateToProps,mapDispatchToProps)(Nottodo);

  export default NottodoContainer;