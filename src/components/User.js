import React from 'react';
import { Media, Button } from "reactstrap";
import * as actions from "../actions";
import { connect } from "react-redux";

const User = props => {

  function onImageError(e) {
    e.target.src = "https://images.pexels.com/photos/264196/pexels-photo-264196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }

  return (
    <tr className="fila">
      <td>
        <div className="profile">
          <Media className="profile-picture" object src={props.user.photo} onError={(e) => onImageError(e)} />
          <div className="profile-info">
            <div className="profile-name">{props.user.name}</div>
            <div>
              <Button style={{color:"#fab43d"}} className="delete-btn" color="link" onClick={() => props.deleteUser(props.user)}>Eliminar</Button>
            </div>
          </div>
        </div>
      </td>
      <td className="profile-description">{props.user.description}</td>
    </tr>
  );
}

export default connect(null, actions)(User);