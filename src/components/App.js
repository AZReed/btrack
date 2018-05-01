import React from 'react';
import Users from "./Users";
import Pagination from "./Pagination";
import Menu from "./Menu";
import { Container, Row, Col } from 'reactstrap';

const App = props => {
  return (
    <Container>
      <Row>
        <Col style={{margin: "20px 0"}}><h4><span style={{color: "#a2a2a2"}}>Test </span>Beetrack</h4></Col>
      </Row>
      <Menu />
      <Users />
      <Pagination />
    </Container>
  );
}

export default App;
