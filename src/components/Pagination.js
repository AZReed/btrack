import React, { Component } from 'react';
import * as actions from "../actions";
import { connect } from "react-redux";
import { Button, Alert } from "reactstrap";

class Pagination extends Component {

  state = {
    page: 1,
    warning: false
  }

  onDismiss() {
    this.setState({warning: false})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.users.length === 0 && prevState.page === this.state.page) {
      let page;
      if (this.state.page === 1) {
      } else {
        this.setState({ page, warning: true }, () => this.props.fetchUsersPage(this.state.page))
      }
    }
  }

  previousPageButton() {
    return this.state.page > 1
      ? <Button style={{color: "#a2a2a2"}} color="link" className="float-left" onClick={() => this.goToPage(-1)}><i style={{color: "#fab43d"}} className="fas fa-arrow-circle-left"></i> Página anterior</Button>
      : null
  }

  nextPageButton() {
    return this.props.users.length < 8
      ? null
      : <Button style={{color: "#a2a2a2"}} color="link" className="float-right" onClick={() => this.goToPage(1)}>Siguiente página <i style={{color: "#fab43d"}} className="fas fa-arrow-circle-right"></i></Button>
  }

  goToPage(num) {
    let page = this.state.page
    let result = num === 1 ? page + 1 : page - 1
    this.setState({ page: result }, () => this.props.fetchUsersPage(this.state.page))
  }

  render() {
    return (
      <div>
        <Alert color="warning" isOpen={this.state.warning} toggle={() => this.onDismiss()}>
          No hay mas datos en la pagina siguiente
        </Alert>
        <div className="clearfix">
          {this.previousPageButton()}
          {this.nextPageButton()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, ownProps) {
  return {
    users: users || [],
  };
}

export default connect(mapStateToProps, actions)(Pagination);