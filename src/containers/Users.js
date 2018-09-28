import React, { Component } from 'react';
import * as actions from "../actions";
import { connect } from "react-redux";
import UsersList from "../components/UsersList";
import UsersPagination from '../components/UsersPagination';

class Users extends Component {

  componentDidMount() {
    this.props.fetchUsersPage({page: this.props.page, limit: 5})
  }

  usersWithLimit() {
    return this.props.users.filter( (user, index) => index < this.props.limit ? true : false )
  }

  render() {
    const { users, withLimitation } = this.props
    return (
      <div>
        <UsersList
          deleteUser={this.props.deleteUser}
          users={ withLimitation ? this.usersWithLimit() : users}
          />
        <UsersPagination
          itemsLength={this.usersWithLimit().length}
          fetchUsersPage={this.props.fetchUsersPage}
        />
      </div>
    );
  }
}

function mapStateToProps({ users = {}, page, withLimitation, limit }) {
  return {
    users: Object.keys(users).map( userId => users[userId]),
    page,
    withLimitation,
    limit
  }
}

export default connect(mapStateToProps, actions)(Users);