import React from "react";
import { Button, Alert } from "reactstrap";
import Pagination from "../containers/Pagination";

const UsersPagination = props => {
  return (
    <Pagination
      itemsLength={props.itemsLength}
      itemsPerPage={5}
      nextAction={page => props.fetchUsersPage({page, limit: 5})}
    >
      {({
        warning,
        onDismiss,
        nextPageButton,
        previousPageButton,
        goToPage
      }) => (
        <React.Fragment>
          <Alert color="warning" isOpen={warning} toggle={() => onDismiss()}>
            No hay mas datos en la pagina siguiente
          </Alert>
          <div className="clearfix">
            {previousPageButton ? (
              <Button
                style={{ color: "#a2a2a2" }}
                color="link"
                className="float-left"
                onClick={() => goToPage(-1)}
              >
                <i
                  style={{ color: "#fab43d" }}
                  className="fas fa-arrow-circle-left"
                />{" "}
                Página anterior
              </Button>
            ) : null}
            {nextPageButton ? (
              <Button
                style={{ color: "#a2a2a2" }}
                color="link"
                className="float-right"
                onClick={() => goToPage(1)}
              >
                Siguiente página{" "}
                <i
                  style={{ color: "#fab43d" }}
                  className="fas fa-arrow-circle-right"
                />
              </Button>
            ) : null}
          </div>
        </React.Fragment>
      )}
    </Pagination>
  );
};

export default UsersPagination;
