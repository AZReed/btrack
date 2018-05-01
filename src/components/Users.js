import React, { Component } from 'react';
import  User from "./User";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Table } from "reactstrap";

class Users extends Component {

  componentDidMount() {
    this.props.fetchUsersPage(this.props.page)
  }

  render() {

    const { users } = this.props

    return (
      <div>
        <Table style={{backgroundColor: "white"}} bordered>
          <thead>
            <tr>
              <th style={{borderRight: "none"}}>Nombre</th>
              <th style={{borderLeft: "none"}}>Description</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map( (user, index) => (
              <User key={index} user={user}/>
             ) )}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ users = [], page, addedUser, deletedUser }, ownProps) {

  if (deletedUser && users[deletedUser.id]) {
    delete users[deletedUser.id];
  }

  if (addedUser && !users[addedUser.id] && Object.keys(users).length < 8) {
    users[addedUser.id] = addedUser;
  }

  return {
    users: Object.keys(users).map( userId => users[userId]),
    page
  }
}

export default connect(mapStateToProps, actions)(Users);