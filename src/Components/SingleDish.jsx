import React from 'react';
import { Media } from "reactstrap";

class SingleDish extends React.Component {
    state = {  }
    render() { 
        return (  
        <Media>
            <Media left href="#">
              <Media object src="assets/images/carbonara.jpg" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
              Carbonara
              </Media>
              Pasta with Guanciale (a kind of bacon), Pecorino (sheep cheese), Pepper, Salt and Eggs.    </Media>
          </Media> 
        );
    }
}
 
export default SingleDish;