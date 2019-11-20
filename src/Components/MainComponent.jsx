import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap"
import ClaimComponent from './ClaimComponent';
import MyMenu from "../data/menu.json"
import SingleDish from './SingleDish';
import SimpleComponent from './SimpleComponent';
import DishDetails from './DishDetails';

class MainComponent extends React.Component {

    state = { 
        selectedDish: undefined,
        searchString: ""
     }

    selectDish = (whatever) => {
        this.setState({
            selectedDish: whatever
        })
    }

    searchChange = (ev) =>{
        this.setState({
            searchString: ev.target.value.toLowerCase()
        })
    }

    render() { 
        return ( 
        <Container>
            <Row>
                <Col md="12">
                    <ClaimComponent />
                </Col>  
                <Col md="12">
                    <Input type="text" placeholder="Search the menu" onChange={this.searchChange} value={this.state.searchString}  className="mb-5" />
                    {/* Every time you have a map or a foreach, remember to specify the KEY for each item you are creating.
                    Key is a props, usually you can use the second parameter of map or foreach as unique identified
                    example:
                    */}
                    {MyMenu
                    .filter(dish => 
                       dish.name.toLowerCase().includes(this.state.searchString) 
                    || dish.description.toLowerCase().includes(this.state.searchString))
                    .map((menuEntry, index) => 
                        <SingleDish dish={menuEntry} key={index} onSelectedDish={this.selectDish} />
                    )}
                </Col>

                {/* We can pass as prop:
                - single values
                - objects
                - functions */}

                {/* This is the conditional rendering. The DishDetails is rendered ONLY if this.state.selectedDish has a value! */}
                { this.state.selectedDish && <DishDetails selectedDish={this.state.selectedDish} /> }

                {/* <Col md="12">
                    {this.state.myArray.map((entry, index) => <h2 key={index}>{entry}</h2>)}
                </Col> */}
            </Row>
                {/* <Col md="12">
                     <SimpleComponent  />
                        <SimpleComponent  />
                        <SimpleComponent  />
                        <SimpleComponent  />
                        <SimpleComponent  />
                        <SimpleComponent  />
                        <SimpleComponent  />
                        <SimpleComponent  />
                        <SimpleComponent  />
                        <SimpleComponent  /> 
                </Col> */}
        </Container> );
    }
}
 
export default MainComponent;