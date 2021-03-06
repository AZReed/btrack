import { normalize, schema } from 'normalizr';
import * as BeetrackAPI from "../utils/BeetrackAPI";
import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_PAGE
} from "./actionTypes";

const user = new schema.Entity('users');

export function fetchUsers(q) {
  return dispatch => {
    BeetrackAPI.fetchUsers(q)
      .then( users => dispatch({ type: FETCH_USERS, ...normalize(users,[user]), withLimitation: false }));
  };
}

export function fetchUsersPage({page, limit}) {
  return dispatch => {
   BeetrackAPI.fetchUsersPage(page, limit)
     .then( users => dispatch({ type: FETCH_USERS_PAGE, ...normalize(users,[user]), page, withLimitation: true }));
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
