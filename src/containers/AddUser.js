import React, { Component } from 'react';
import * as actions from "../actions";
import { connect } from "react-redux";
import AddUserForm from "../components/AddUserForm";

class AddUser extends Component {

  state = {
    photo: '',
    name: '',
    description: '',
    alert: false,
    modal: false
  }

  toggleModel = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addContact = () => {
    this.setState({modal: true})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {photo, name, description} = this.state;

    if (photo === '' || name === '' || description === '') {
      this.setState({alert: true});
      return;
    }

    let user = {photo, name, description};
    this.props.addUser(user);  
    this.toggleModel();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onDismiss = () => {
    this.setState({alert: false})
  }

  render() {
    return (
      <AddUserForm 
        onDismiss={this.onDismiss}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        addContact={this.addContact}
        toggleModel={this.toggleModel}
        modal={this.state.modal}
        alert={this.state.alert}
      >
      </AddUserForm>
    );
  }
}

export default connect(null,actions)(AddUser);