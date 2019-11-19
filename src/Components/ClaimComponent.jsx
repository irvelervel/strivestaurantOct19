import React from 'react';
import { Jumbotron, Button} from "reactstrap"

class ClaimComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
        <Jumbotron>
            <h1 className="display-3">Welcome to Strivestaurant!</h1>
            <p className="lead">The best remote restaurant in the world!</p>
            <hr className="my-2" />
            <p>You can't eat it, but you'll pay in any case!</p>
            <p className="lead">
              <Button color="primary">Fake eat now! 0 cals</Button>
            </p>
        </Jumbotron>
    );
    }
}
 
export default ClaimComponent;