import React, { Component } from 'react';
import * as actions from "../actions";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

class AddUser extends Component {

  state = {
    photo: '',
    name: '',
    description: '',
    alert: false,
    modal: false
  }

  toggleModel() {
    this.setState({
      modal: !this.state.modal
    });
  }

  addContact(){
    this.setState({modal: true})
  }

  handleSubmit(e) {
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onDismiss(){
    this.setState({alert: false})
  }

  render() {
    return (
      <div>
        <Button style={{color:"white", backgroundColor:"#fab43d", borderColor:"#fab43d"}} onClick={() => this.addContact()}>Nuevo Contacto</Button>
        <Modal isOpen={this.state.modal} toggle={() => this.toggleModel()} className={this.props.className}>
          <ModalHeader>Agregar nuevo contacto</ModalHeader>
          <ModalBody style={{backgroundColor: "#f9f9f9"}}>
            <Alert color="danger" isOpen={this.state.alert} toggle={() => this.onDismiss()}>
              Todos los campos son obligatorios
            </Alert>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <FormGroup>
                <Label for="photoUrl">Url *</Label>
                <Input type="url" name="photo" id="photoUrl" onChange={e => this.handleChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="name">Nombre *</Label>
                <Input type="text" name="name" id="name" onChange={e => this.handleChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="description">Text Area *</Label>
                <Input type="textarea" name="description" id="description" onChange={e => this.handleChange(e)}/>
              </FormGroup>
              <Button style={{display: "block", margin: "0 auto", color:"white", backgroundColor:"#fab43d", borderColor:"#fab43d", minWidth: "12em"}}>Guardar</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(null,actions)(AddUser);