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

function mapStateToProps({ users = [], page, addedUser }, ownProps) {
  return { 
    users: Object.keys(users).map( userId => users[userId])
  }

  if (addedUser && users.length < 8) {
    var modifiedUsers = Object.assign([], users);
    modifiedUsers.push(addedUser);
  }

  return {
    users: modifiedUsers || users || [],
    page
  };
}

export default connect(mapStateToProps, actions)(Users);