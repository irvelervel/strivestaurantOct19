import React from 'react';
import { Row,Container, Col, Input, Button, FormGroup, Label, Alert, Spinner } from "reactstrap"
import ShowReservation from './ShowReservation';


class ReservationComponent extends React.Component {
    state = { 
        reservation: {
            name: "",
            phone: "",
            numberOfPersons: 1,
            smoking: false,
            dateTime: "",
            specialRequests: ""
        },
        message: undefined,
        errorMessage: undefined,
        isLoading: false
     }

    handleInput = (ev) =>{
        var input = ev.currentTarget;

        let inputName = input.id; //=> name, numberOfPersons, phone...
        let modifiedReservation = this.state.reservation;

        if (inputName === "smoking")
            modifiedReservation[inputName] = input.checked;
        // else if (inputName === "numberOfPersons")
        //     modifiedReservation[inputName] = parseInt(input.value)
        else
            modifiedReservation[inputName] = input.value;

        console.log("Event generate by ", input)
        console.log("The id is", inputName)
        console.log("the value is ", modifiedReservation[inputName])
        console.log("therefore my reservation now is", modifiedReservation)

        this.setState({ //replacing current reservation object with the new, modified version
            reservation: modifiedReservation
        })
    }

    //this ==> currentComponent 

    submitReservation = async () => {
        this.setState({
                isLoading: true
            })
        try{
        //1) send the request to the server
        let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/reservation",{
            method: "POST",
            body: JSON.stringify(this.state.reservation),
            headers: {
                "Content-Type": "application/json"
            }
        });
        //2) show a message (success or failure)
            if (response.ok){
                this.setState({
                    reservation: {
                        name: "",
                        phone: "",
                        numberOfPersons: 1,
                        smoking: false,
                        dateTime: "",
                        specialRequests: ""
                    },
                    message: "Reservation sent! See you soon!",
                    errorMessage: undefined,
                    isLoading: false
                })

                setTimeout(
                    function() {
                        this.setState({
                            message: undefined,
                        })
                    }
                    .bind(this),
                    3000
                );
                //Show a message
                //3) clean my form (take it to the initial status)
            }
            else{
                this.setState({
                    isLoading: false,
                    message: undefined,
                    errorMessage:"Something went wrong in the creation of the reservation. Please try later or contact us @ +39 80 822 544"
                })

                setTimeout(
                    function() {
                        this.setState({
                            errorMessage: undefined,
                        })
                    }
                    .bind(this),
                    3000
                );
            }
        }
        catch{
            this.setState({
                message: undefined,
                isLoading: false,
                errorMessage:"Something went wrong in the creation of the reservation. Please try later or contact us @ +39 80 822 544"
            })
            setTimeout(
                function() {
                    this.setState({
                        errorMessage: undefined,
                    })
                }
                .bind(this),
                3000
            );
        }
    }

    // whoHasBeenClicked = (ev) => {
    //     //CURRENTTARGET ==> Will always be the DOM element that has the event Listener attached!
    //     //TARGET ==> Could be the DOM element that has the event Listener attached, or some of the child who bubbles on the event
    //     console.log("this is the target", ev.target)
    //     console.log("this is the currentTarget", ev.currentTarget)

    //     ev.currentTarget.style.border = "1px solid red";
    //     ev.target.style.border = "1px solid green";
    // }

    render() { 
        return ( 
        <Container>
            {/* <div onClick={this.whoHasBeenClicked}>
                <h1>test 1 </h1>
                <h2>test 2 </h2>
            </div> */}
            <h3>Reserve your table now!</h3>
            <div>
                <Row>
                    <FormGroup className="col-md-6">
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" placeholder="Insert here your name" 
                                value={this.state.reservation.name}
                                onChange={this.handleInput} />
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
                    <Row > 
                        <FormGroup className="col-md-12">
                            <Button  onClick={this.submitReservation}>Submit Reservation</Button>
                        </FormGroup>
                    </Row>
                    {/* Name, Phone, Number of persons, Smoking / Non Smoking, Date&Time, Special Requests */}
                    <Row className="col-md-12">
                        {this.state.isLoading && <Spinner type="grow" color="primary" /> }
                        {this.state.message && <Alert color="success">
                            {this.state.message}
                        </Alert>}
                        {this.state.errorMessage && <Alert color="danger">
                            {this.state.errorMessage}
                        </Alert>}
                    </Row>
                </Row>
            </div>
            <hr />

            <ShowReservation />
        </Container> );
    }
}
 
export default ReservationComponent;