import React, { Component } from 'react';
import * as actions from "../actions";
import { connect } from "react-redux";
import UsersList from "../components/UsersList";
// import Pagination from "./Pagination";
import UsersPagination from '../components/UsersPagination';

class Users extends Component {

  componentDidMount() {
    this.props.fetchUsersPage({page: this.props.page, limit: 5})
  }

  render() {
    const { users } = this.props
    return (
      <div>
        <UsersList
          deleteUser={this.props.deleteUser}
          users={users}
          />
        <UsersPagination
          items={users}
          fetchUsersPage={this.props.fetchUsersPage}
        />
      </div>
    );
  }
}

function mapStateToProps({ users = {}, page, addedUser, deletedUser }, ownProps) {

  if (deletedUser && users[deletedUser.id]) {
    delete users[deletedUser.id];
  }

  if (addedUser && !users[addedUser.id] && Object.keys(users).length < 5) {
    users[addedUser.id] = addedUser;
  }

  return {
    users: Object.keys(users).map( userId => users[userId]),
    page
  }
}

export default connect(mapStateToProps, actions)(Users);