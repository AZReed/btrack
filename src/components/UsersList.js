import React from 'react';
import  User from "./User";
import { Table } from "reactstrap";

const UsersList = (props) => {
  return (
    <div>
      <Table style={{backgroundColor: "white"}} bordered>
        <thead>
          <tr>
            <th style={{borderRight: "none"}}>Nombre</th>
            <th style={{borderLeft: "none"}}>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.users && props.users.map( (user, index) => (
            <User
              deleteUser={props.deleteUser}
              key={index}
              user={user}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersList;