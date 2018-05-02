import React, { Component } from 'react';
import * as actions from "../actions";
import { connect } from "react-redux";
import UsersPagination from "../components/UsersPagination";

class Pagination extends Component {

  state = {
    page: 1,
    warning: false
  }

  onDismiss = () => {
    this.setState({warning: false})
  }

  componentDidUpdate = (prevProps, prevState) => {
    let page = this.state.page;
    let prev_page = page - 1;
    let diff = prevState.page - prev_page;
    if (this.props.items.length === 0 && page !== 1 && diff === 1) {
      console.log("ALKFjalskdfjalsñ",prevState.page, prev_page)
      this.setState({ page: prev_page, warning: true }, () => this.props.fetchUsersPage(prev_page))
    }
  }

  previousPageButton = () => {
    return this.state.page > 1 ? true : false
  }

  nextPageButton = () => {
    return this.props.items.length < 8 ? false : true
  }

  goToPage = (num) => {
    let page = this.state.page
    let result = num === 1 ? page + 1 : page - 1
    this.setState({ page: result }, () => this.props.fetchUsersPage(this.state.page))
  }

  render() {

    const {page, warning} = this.state;

    return (
      <UsersPagination
        onDismiss={this.onDismiss}
        goToPage={this.goToPage}
        previousPageButton={this.previousPageButton()}
        nextPageButton={this.nextPageButton()}
        warning={warning}
        page={page}
      />
    );
  }
}

export default connect(null, actions)(Pagination);