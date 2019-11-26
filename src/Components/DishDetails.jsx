import React from "react";
import { Container, Col, Row } from "reactstrap";

import items from "../data/menu.json";

const DishDetails = props => {
  const dishId = props.match.params.dishId;
  const dish = items.find(item => item.id.toString() === dishId);

  if (dish) {
    return (
      <Container className="my-5">
        <Row>
          <Col md="4">
            <img
              className="dish-detail-image"
              src={"/" + dish.image}
              alt="selected dish"
            ></img>
          </Col>
          <Col md="8">
            <h2>{dish.name}</h2>
            <h3>{dish.description}</h3>
            <h4>Label: {dish.label}</h4>
            <h4>Price: {dish.price}</h4>

            <ul>
              {dish.comments.map((comment, k) => (
                <li key={k}>
                  {comment.rating} | {comment.comment} by {comment.author}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <div>This dish is not available</div>;
  }
};

export default DishDetails;
