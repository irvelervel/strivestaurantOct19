import React from "react";
import { Media } from "reactstrap";

class SingleDish extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <Media>
        <Media left href="#">
          <Media object src={this.props.dish.image} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>{this.props.dish.name}</Media>
          {this.props.dish.description}
        </Media>
      </Media>
    );
  }
}

export default SingleDish;
