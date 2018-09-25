import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

const AddUserForm = (props) => {
  return (
    <div>
      <Button style={{color:"white", backgroundColor:"#fab43d", borderColor:"#fab43d"}} onClick={() => props.addContact()}><i className="fas fa-plus-circle"></i> Nuevo Contacto</Button>
      <Modal isOpen={props.modal} toggle={() => props.toggleModel()} className={props.className}>
        <ModalHeader>Agregar nuevo contacto</ModalHeader>
        <ModalBody style={{backgroundColor: "#f9f9f9"}}>
          <Alert color="danger" isOpen={props.alert} toggle={() => props.onDismiss()}>
            Todos los campos son obligatorios
          </Alert>
          <Form onSubmit={e => props.handleSubmit(e)}>
            <FormGroup>
              <Label for="photoUrl">Url *</Label>
              <Input type="url" name="photo" id="photoUrl" onChange={e => props.handleChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="name">Nombre *</Label>
              <Input type="text" name="name" id="name" onChange={e => props.handleChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="description">Text Area *</Label>
              <Input type="textarea" name="description" id="description" onChange={e => props.handleChange(e)}/>
            </FormGroup>
            <Button style={{display: "block", margin: "0 auto", color:"white", backgroundColor:"#fab43d", borderColor:"#fab43d", minWidth: "12em"}}>Guardar</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddUserForm;