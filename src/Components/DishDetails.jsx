import React from 'react';
import { Container, Col, Row} from "reactstrap"

class DishDetails extends React.Component {
    state = {  }
    render() { 
        let dish = this.props.selectedDish;

        return ( 
        <Container className="my-5">
            <Row>
                <Col md="4">
                    <img className="dish-detail-image" src={dish.image} alt="selected dish" ></img>
                </Col>
                <Col md="8">
                    <h2>{dish.name}</h2>
                    <h3>{dish.description}</h3>
                    <h4>Label: {dish.label}</h4>
                    <h4>Price: {dish.price}</h4>

                    <ul>
                        {dish.comments.map((comment, k) => 
                        <li key={k}>
                            {comment.rating} | {comment.comment} by {comment.author}
                        </li>
                        )}
                    </ul>
                </Col>
            </Row>
        </Container> );
    }
}
 
export default DishDetails;