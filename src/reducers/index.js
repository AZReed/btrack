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
function users(state = {page: 1, limit: 5}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.entities.users,
        withLimitation: action.withLimitation
      };

    case FETCH_USERS_PAGE:
      return {
        ...state,
        users: action.entities.users,
        page: action.page,
        withLimitation: action.withLimitation
      }

    case ADD_USER:

      let _users_add = Object.assign({}, state.users)
      _users_add[action.user.id] = action.user

      return {
        ...state,
        users: _users_add
      };

    case DELETE_USER:

      let _users_delete = Object.assign({}, state.users)
      delete _users_delete[action.user.id]

      return {
        ...state,
        users: _users_delete
      }

    default:
      return { ...state };
  }
}

export default users;