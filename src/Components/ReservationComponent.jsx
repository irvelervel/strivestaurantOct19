import React from 'react';
import { Row,Container, Col, Input, Button, FormGroup, Label } from "reactstrap"


class ReservationComponent extends React.Component {
    state = { 
        reservation: {
            name: "",
            phone: "",
            numberOfPersons: 1,
            smoking: false,
            dateTime: "",
            specialRequests: ""
        }
     }

    handleInput = (ev) =>{
        var input = ev.target;

        let inputName = input.id;
        let reservation = this.state.reservation;
        if (inputName === "smoking")
            reservation[inputName] = input.checked;
        else
            reservation[inputName] = input.value;

        this.setState({
            reservation: reservation
        })
    }

    submitReservation = () => {
        console.log(this.state.reservation)
    }

    render() { 
        return ( 
        <Container>
            <h3>Reserve your table now!</h3>
            <div>
                <Row>
                    <FormGroup className="col-md-6">
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" placeholder="Insert here your name" 
                                value={this.state.reservation.name}
                                onChange={this.handleInput}
                                 />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label for="phone">Phone</Label>
                        <Input type="text" id="phone" placeholder="Insert here your phone"
                                value={this.state.reservation.phone}
                                onChange={this.handleInput} />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label for="numberOfPersons">People</Label>
                        <Input type="select" id="numberOfPersons" value={this.state.reservation.numberOfPersons} onChange={this.handleInput}  >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </Input>
                        {/* <Input type="number" id="numberOfPersons" placeholder="How many guests?" /> */}
                    </FormGroup>
                    <FormGroup className="col-md-6" check style={{ display:"flex", alignSelf:"center"}}>
                        <Label check>
                            <Input type="checkbox" id="smoking" checked={this.state.reservation.smoking} onChange={this.handleInput} ></Input>
                            Smoking?
                        </Label>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label for="dateTime">Date &amp; Time</Label>
                        <Input type="datetime-local" id="dateTime" placeholder="Date &amp; Time"
                        value={this.state.reservation.dateTime} onChange={this.handleInput} ></Input>
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Label for="specialRequests">Special Requests</Label>
                        <Input type="textarea" id="specialRequests"  value={this.state.reservation.specialRequests} onChange={this.handleInput} ></Input>
                    </FormGroup>
                    <Button onClick={this.submitReservation}>Submit Reservation</Button>
                    {/* Name, Phone, Number of persons, Smoking / Non Smoking, Date&Time, Special Requests */}
                </Row>
            </div>
            <hr />
        </Container> );
    }
}
 
export default ReservationComponent;