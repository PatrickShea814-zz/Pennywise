import React from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components';

const Slide = styled.div`
    height: 400px;
    width: 100%;
`;

class WelcomeCarousel extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            slides: [
                (<Slide>
                    <img
                        style={{ width: "100%", height: "100%" }}
                        src="https://www.w3schools.com/bootstrap/ny.jpg"
                        alt="Crowd"
                    />
                </Slide>),
                (<Slide>
                    <div className="carousel-center">Save Dat Money</div>
                </Slide>),
                (<Slide>
                    <span>Treat Yo Self</span>
                </Slide>)
            ]
        }
    }
    onChange = value => this.setState({ value });
    render() {
        return (
            <Carousel
                value={this.state.value}
                onChange={this.onChange}
                slides={this.state.slides}
                autoPlay={3200}
                animationSpeed={1000}
                infinite
                clickToChange
            />
        );
    }
}

export default WelcomeCarousel;