import React, { Component } from 'react';
import { Input } from "reactstrap";
import * as actions from "../actions";
import { connect } from "react-redux";

class Search extends Component {

  state = {
    search: ''
  }

  handleSearch(e) {

    /* 
      Si no hay nada para buscar, trae los usuarios correspondientes a la pagina actual,
      de lo contrario busca todos los usuarios
    */
    
    if (e.target.value.length === 0) {
      this.props.fetchUsersPage(this.props.page)
    } else {
      let query = `q=${e.target.value}`
      this.props.fetchUsers(query)
    }
  }

  render() {
    return (
      <div className="search">
        <span className="fas fa-search"></span>
        <Input type="text" name="contact" id="searchContact" placeholder="Buscar contacto ..." onChange={(e) => this.handleSearch(e)}/>
    </div>
    );
  }
}

function mapStateToProps({ page }, ownProps) {
  return {
    page
  };
}

export default connect(mapStateToProps, actions)(Search);