import React from "react";
import { Media } from "reactstrap";
import "../singledish.css";
import { Link } from "react-router-dom";

class SingleDish extends React.Component {
  render() {
    return (
      <div>
        <Media left href="#">
          <Link to={"/dishdetails/" + this.props.dish.id}>
            <Media
              className="menu-list-image"
              object
              src={this.props.dish.image}
              alt="Generic placeholder image"
            />
          </Link>
        </Media>
        <Media body>
          <Media heading>{this.props.dish.name}</Media>
          {this.props.dish.description}
        </Media>
      </div>
    );
  }
}

export default SingleDish;
