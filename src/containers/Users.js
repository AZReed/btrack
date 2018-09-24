import React, { Component } from 'react';
import * as actions from "../actions";
import { connect } from "react-redux";
import UsersList from "../components/UsersList";
import Pagination from "./Pagination";

class Users extends Component {

  componentDidMount() {
    this.props.fetchUsersPage(this.props.page)
  }

  render() {
    const { users } = this.props
    return (
      <div>
        <UsersList
          deleteUser={this.props.deleteUser}
          users={users}
          />
        <Pagination
          items={users}
        />
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