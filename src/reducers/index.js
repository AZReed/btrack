import { 
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_PAGE
}
from "../actions/actionTypes";
/* 
  He usado en Redux funciones que tienen que ver con un solo tema (users),
  por lo tanto no hago uso de import { combineReducers } from "redux";
 */
function users(state = {}, action) {
  //console.log('reducer',state, action)
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.entities.users,
      };

    case FETCH_USERS_PAGE:
      return {
        ...state,
        users: action.entities.users,
        page: action.page
      }

    case ADD_USER:

      /* 
        Si hay ya 8 usuarios en la vista, hay que clickear siguiente página para
        poder ver el nuevo usuario, si no, aparecera el nuevo usuario en la vista
      */
      if (state.users.length < 8) {
        var users = Object.assign([], state.users)
        users.push(action.user)
      }

      return {
        ...state,
        addedUser: action.user
      };

    case DELETE_USER:
      return {
        users: state.users.filter( user => user.id !== action.user.id)
      }

    default:
      return { ...state };
  }
}

export default users;