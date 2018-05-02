import React from 'react';
import { Button, Alert } from "reactstrap";

const UsersPagination = (props) => {

  return (
    <div>
      <Alert color="warning" isOpen={props.warning} toggle={() => props.onDismiss()}>
        No hay mas datos en la pagina siguiente
      </Alert>
      <div className="clearfix">
        {(
          props.previousPageButton
          ? <Button style={{color: "#a2a2a2"}} color="link" className="float-left" onClick={() => props.goToPage(-1)}><i style={{color: "#fab43d"}} className="fas fa-arrow-circle-left"></i> Página anterior</Button>
          : null
        )}
        {(
          props.nextPageButton
          ? <Button style={{color: "#a2a2a2"}} color="link" className="float-right" onClick={() => props.goToPage(1)}>Siguiente página <i style={{color: "#fab43d"}} className="fas fa-arrow-circle-right"></i></Button>
          : null
        )}
      </div>
    </div>
  );
}

export default UsersPagination;