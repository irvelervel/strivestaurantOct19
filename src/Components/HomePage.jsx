import React from "react";
import { Container, Row, Col } from "reactstrap";
import ClaimComponent from "./ClaimComponent";
import MyMenu from "../data/menu.json";

class MainComponent extends React.Component {
  state = {
    selectedDish: undefined
  };

  selectDish = whatever => {
    this.setState({
      selectedDish: whatever
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <ClaimComponent
              menuItems={MyMenu}
              onSelectedDish={this.selectDish}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainComponent;
