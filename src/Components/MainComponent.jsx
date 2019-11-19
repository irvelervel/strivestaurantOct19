import React from 'react';
import { Button, Container, Row, Col } from "reactstrap"
import ClaimComponent from './ClaimComponent';
import MyMenu from "../data/menu.json"
import SingleDish from './SingleDish';

class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
        <Container>
            <Row>
                <Col md="12">
                    <ClaimComponent />
                </Col>  

                <Col md="12">
                    {/* Every time you have a map or a foreach, remember to specify the KEY for each item you are creating.
                    Key is a props, usually you can use the second parameter of map or foreach as unique identified
                    example:
                    */}
                    {MyMenu.map((menuEntry, index) => 
                        <SingleDish dish={menuEntry} key={index} />
                    )}
                </Col>

                {/* <Col md="12">
                    {this.state.myArray.map((entry, index) => <h2 key={index}>{entry}</h2>)}
                </Col> */}
            </Row>
        </Container> );
    }

    // <div class="container">
    //     <div class="row">
    //         <div class="col-md-12">
    //             <!-- importing the Claim Component -->
    //         </div>
    //         <div class="col-md-4">
    //         This is my main component
    //         </div>
    //         <div class="col-md-8">
    //             <input type="button" class="btn btn-primary"></input>
    //         </div>
    //     </div>
    // </div>
}
 
export default MainComponent;