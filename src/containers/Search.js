import React, { Component } from 'react';
import * as actions from "../actions";
import { connect } from "react-redux";
import SearchInput from "../components/SearchInput";

class Search extends Component {

  state = {
    search: ''
  }

  handleSearch = (e) => {

    /* 
      Si no hay nada para buscar, trae los usuarios correspondientes a la pagina actual,
      de lo contrario busca todos los usuarios
    */
    console.log("SEARCH",this.props.page)
    if (e.target.value.length === 0) {
      this.props.fetchUsersPage({page: this.props.page})
    } else {
      let query = `q=${e.target.value}`
      this.props.fetchUsers(query)
    }
  }

  render() {
    return (
      <SearchInput handleSearch={this.handleSearch}/>
    );
  }
}

function mapStateToProps({ page }) {
  return {
    page
  };
}

export default connect(mapStateToProps, actions)(Search);