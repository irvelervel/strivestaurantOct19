import React from 'react';
import { Button, Container, Row, Col } from "reactstrap"
import ClaimComponent from './ClaimComponent';

class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
        <Container>
            <Row>
                <Col md="12">
                    <ClaimComponent />
                </Col>

                <Col md="4">
                    This is my main component
                </Col>
                <Col md="8">
                    <Button color="primary">primary</Button>
                </Col>
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