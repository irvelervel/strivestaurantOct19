import React from 'react';
import { Jumbotron, Carousel, CarouselItem, CarouselIndicators, CarouselCaption, CarouselControl} from "reactstrap"

class ClaimComponent extends React.Component {
    state = { 
       currentSelectedDish: 0
    }

    prev = () =>{
        if (this.animating) return
        this.setState({
            currentSelectedDish: this.state.currentSelectedDish - 1 < 0 ? this.props.menuItems.length -1 : this.state.currentSelectedDish - 1
        })
    }

    next = () => {
        if (this.animating) return
        this.setState({
            currentSelectedDish: this.state.currentSelectedDish + 1 >= this.props.menuItems.length ? 0 : this.state.currentSelectedDish + 1
        })
    }

    goToIndex = (index) => {
        if (this.animating) return
        this.setState({
            currentSelectedDish: index
        })
    }

    render() { 
        let menu = this.props.menuItems;

        return ( 
        <Jumbotron>
            <h1 className="display-3">Welcome to Strivestaurant!</h1>
            <p className="lead">The best remote restaurant in the world!</p>
            <hr className="my-2" />
            <Carousel activeIndex={this.state.currentSelectedDish} previous={this.prev} next={this.next} >
                <CarouselIndicators items={menu} activeIndex={this.state.currentSelectedDish} onClickHandler={this.goToIndex} />
                {menu.map((menuEntry, index) =>
                    <CarouselItem 
                        key={index} 
                        onExiting={() => this.animating = true } 
                        onExited={() => this.animating = false} 
                       >
                        <div onClick={() => this.props.onSelectedDish(menuEntry)} style={{ display:"flex", alignItems:"center",justifyContent: "center", backgroundColor: "darkgray"}}>
                            <img src={menuEntry.image} style={{cursor:"pointer"}} alt={menuEntry.name}></img>
                            <CarouselCaption captionText={menuEntry.description} captionHeader={menuEntry.name}></CarouselCaption>
                        </div>
                    </CarouselItem>
                )}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.prev} ></CarouselControl>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} ></CarouselControl> 
            </Carousel>
        </Jumbotron>
    );
    }
}
 
export default ClaimComponent;