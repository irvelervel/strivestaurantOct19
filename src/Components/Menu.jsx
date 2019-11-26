import React from "react";
import { Container, Row, Col, Input } from "reactstrap";
import MyMenu from "../data/menu.json";
import SingleDish from "./SingleDish";

class MainComponent extends React.Component {
  state = {
    searchString: ""
  };

  searchChange = ev => {
    this.setState({
      searchString: ev.target.value.toLowerCase()
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <Input
              type="text"
              placeholder="Search the menu"
              onChange={this.searchChange}
              value={this.state.searchString}
              className="mb-5"
            />
            {/* Every time you have a map or a foreach, remember to specify the KEY for each item you are creating.
                    Key is a props, usually you can use the second parameter of map or foreach as unique identified
                    example:
                    */}
            {MyMenu.filter(
              dish =>
                dish.name.toLowerCase().includes(this.state.searchString) ||
                dish.description.toLowerCase().includes(this.state.searchString)
            ).map((menuEntry, index) => (
              <SingleDish
                dish={menuEntry}
                key={index}
                onSelectedDish={this.selectDish}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainComponent;
