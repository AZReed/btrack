import React, { Component } from 'react';
import * as actions from "../actions";
import { connect } from "react-redux";
import UsersList from "../components/UsersList";
import UsersPagination from '../components/UsersPagination';
import { Alert } from "reactstrap";

class Users extends Component {

  state = {
    warning: false
  }

  componentDidUpdate(prevProps, prevState) {
    /* 
    TODO: tratar de poner el warning a traves de middleware
     */
    const { limit, users } = this.props
    if (prevProps.users.length > 0 && users.length === 0) {
      // this.setState({ page: result }, () => this.props.nextAction(result))
      this.setState({ warning: true }, () => this.props.fetchUsersPage({ page: prevProps.page, limit}))
    }
  }

  onDismiss = () => {
    this.setState({warning: false})
  }

  componentDidMount() {
    const { page, limit} = this.props
    this.props.fetchUsersPage({ page, limit })
  }

  usersWithLimit() {
    return this.props.users.filter( (user, index) => index < this.props.limit ? true : false )
  }

  render() {
    const { users, withLimitation, limit, page } = this.props
    return (
      <React.Fragment>
        <Alert color="warning" isOpen={this.state.warning} toggle={this.onDismiss}>
          No hay mas datos que mostrar
        </Alert>
        <UsersList
          deleteUser={this.props.deleteUser}
          users={ withLimitation ? this.usersWithLimit() : users}
          />
        <UsersPagination
          itemsLength={this.usersWithLimit().length}
          limitPerPage={limit}
          fetchUsersPage={this.props.fetchUsersPage}
          page={page}
        />
      </React.Fragment>
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