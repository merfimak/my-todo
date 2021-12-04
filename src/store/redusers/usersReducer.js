
const SET_USERS = 'SET_USERS'
const TOTAL_COUNT = 'TOTAL_COUNT'
const CURRENT_PAGE = 'CURRENT_PAGE'

let initialState = {
    users: [],
    pageSize: 5,
    carrentPage: 1,
    totalUsersCount: 0,
    
}








export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:{
            return{
                ...state,
                users: [...action.users] 
            }
        }
        case TOTAL_COUNT:{
            return{
                ...state,
                totalUsersCount: action.totalCount 
            }
        }
        case CURRENT_PAGE:{
            return{
                ...state,
                carrentPage: action.CurentPage 
            }
        }
    
    default:
        return state;
    }





}


export const setUsersActionCreator = (users) =>{
    return(
       {type: SET_USERS,
        users
       }
   )
   }

   export const setTotalCountActionCreator = (totalCount) =>{
       
    return(
       {type: TOTAL_COUNT,
         totalCount
       }
   )
   }

   export const setCurentPageActionCreator = (CurentPage) =>{
       console.log();
    return(
       {type: CURRENT_PAGE,
        CurentPage
       }
   )
}





