import React from "react";
import { Media } from "reactstrap";
import "../singledish.css"

class SingleDish extends React.Component {
  state = {};
  render() {
    return (
      <Media onClick={()=> this.props.onSelectedDish(this.props.dish)}>
        <Media left href="#">
          <Media className="menu-list-image" object src={this.props.dish.image} alt="Generic placeholder image" />
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
