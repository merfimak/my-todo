

const SET_NOTES = 'SET_NOTES'
const NEW_NOTE_TEXT = 'NEW_NOTE_TEXT'
const ADD_NEW_NOTE = 'ADD_NEW_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'
const TOGGLE_NOTE = 'TOGGLE_NOTE'

let initialState = {
    notes: [],
    NoteText: '',
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
			case SET_NOTES:{
				return {//делаем глубинную копию
					...state,
		            notes: [...action.notes]
			 	}
			 }
			 case NEW_NOTE_TEXT:{
				return {
		          ...state,
		          NoteText: action.NewNoteText
		        }
	  		}
	  		 case ADD_NEW_NOTE:{
				return {
		          ...state,
		            notes: [...state.notes, action.NewNote],
		            NoteText: ''
		        }
	  		}
	  		 case DELETE_NOTE:{
				return {
		          ...state,
		            notes: state.notes.filter(note => {
		            	return note.id !== action.id
		            }),
		        }
	  		}
	  		 case TOGGLE_NOTE:{
				return {
		          ...state,
		            notes: state.notes.map( note =>{//проходимся по всем элементам массива
			            if(note.id === action.id){
			              return {...note, completed: !note.completed};
			            }
		            return note;
		          }) ,
		        }
	  		}

	default:
    	return state;
	}
}





export const setNotesActionCreator = (notes) =>{
 return(
    {type: SET_NOTES,
     notes
    }
)
}

export const setNewNoteTextActionCreator = (NewNoteText) =>{
 return(
    {type: NEW_NOTE_TEXT,
     NewNoteText
    }
)
}

export const addNewNoteActionCreator = (NewNote) =>{
 return(
    {type: ADD_NEW_NOTE,
     NewNote
    }
)
}


export const deleteNoteActionCreator = (id) =>{
	
 return(
    {type: DELETE_NOTE,
    	id
    }
)
}


export const toggleNoteActionCreator = (id) =>{
	console.log(id)
 return(
    {type: TOGGLE_NOTE,
    	id
    }
)
}