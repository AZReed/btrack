import React from 'react';
import { Input } from "reactstrap";

const SearchInput = (props) => {

  return (
    <div className="search">
      <span className="fas fa-search"></span>
      <Input type="text" name="contact" id="searchContact" placeholder="Buscar contacto ..." onChange={(e) => props.handleSearch(e)}/>
    </div>
  );
}

export default SearchInput;