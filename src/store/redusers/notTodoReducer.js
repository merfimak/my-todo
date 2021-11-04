

const TOGGLE_NOTE = 'TOGGLE_NOTE'
const TOGGLE_COLOR = 'TOGGLE_COLOR'

let initialState = {
     notTodos: [
      {id: 1, title: 'drink alcohol', completed: false},
      {id: 2, title: 'smoke cigarettes', completed: false},
      {id: 3, title: 'get stuck in the phone', completed: false},
      {id: 4, title: 'eat fast food', completed: false},
    ],
    color: 'magenta',
    
}

export const notTodoReducer = (state = initialState, action) => {
	switch (action.type) {
	  		 case TOGGLE_NOTE:{
				return {
		          ...state,
		            notTodos: state.notTodos.map( note =>{//проходимся по всем элементам массива
			            if(note.id === action.id){
			              return {...note, completed: !note.completed};
			            }
		            return note;
		          }) ,
		        }
		    }
		         case TOGGLE_COLOR:{
				return {
		          ...state,
		            color: action.color
		          }
		        }

	  		

	default:
    	return state;
	}
}




export const toggleNoteActionCreator = (id) =>{
	console.log(id)
 return(
    {type: TOGGLE_NOTE,
    	id
    }
)
}


export const toggleCollorActionCreator = (color) =>{
	console.log(color)
 return(
    {type: TOGGLE_COLOR,
    	color
    }
)
}