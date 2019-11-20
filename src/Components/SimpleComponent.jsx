import React from 'react';
import { Button} from "reactstrap"

class SimpleComponent extends React.Component {
    state = { 
        numberOfClicks: 0,
    }

    incrementNumberOfClicks = () =>{
        //  this.state.numberOfClicks++;
        this.setState({
             numberOfClicks: this.state.numberOfClicks +1
        })
    }

    render() { 
        return ( 
        <div>
            <h2>You clicked {this.state.numberOfClicks} times</h2>
            <Button onClick={this.incrementNumberOfClicks} >+</Button>
        </div> 
        );
    }
}
 
export default SimpleComponent;