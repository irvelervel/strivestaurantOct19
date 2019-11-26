import React from "react";
import { Container, Row } from "reactstrap";
import ReservationComponent from "./ReservationComponent";
import HomePage from "./HomePage";
import Menu from "./Menu";
import Navigation from "./Navigation";
import DishDetails from "./DishDetails";

import { BrowserRouter as Router, Route } from "react-router-dom";

class MainComponent extends React.Component {
  state = {
    selectedDish: undefined,
    searchString: ""
  };

  selectDish = whatever => {
    this.setState({
      selectedDish: whatever
    });
  };

  searchChange = ev => {
    this.setState({
      searchString: ev.target.value.toLowerCase()
    });
  };

  render() {
    return (
      <Router>
        <Navigation />
        <Container>
          <Row>
            <Route path="/" exact component={HomePage} />
            <Route path="/reservation" component={ReservationComponent} />
            <Route path="/menu" component={Menu} />
            <Route path="/dishdetails/:dishId" component={DishDetails} />
          </Row>
        </Container>
      </Router>
    );
  }
}

export default MainComponent;
