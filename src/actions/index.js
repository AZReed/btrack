import * as BeetrackAPI from "../utils/BeetrackAPI";
import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_PAGE
} from "./actionTypes";

export function fetchUsers(q) {
  return dispatch => {
    BeetrackAPI.fetchUsers(q)
      .then( users => dispatch({ type: FETCH_USERS, users }));
  };
}

export function fetchUsersPage(page) {
  return dispatch => {
   BeetrackAPI.fetchUsersPage(page)
     .then( users => dispatch({ type: FETCH_USERS_PAGE, users, page }));
 };
}

export function addUser(user) {
  return dispatch => {
    BeetrackAPI.addUser(user)
      .then( user => dispatch({ type: ADD_USER, user }))
  }
}

export function deleteUser(user) {
  return dispatch => {
    BeetrackAPI.deleteUser(user.id)
      .then( () => dispatch({ type: DELETE_USER, user }))
  }
}
