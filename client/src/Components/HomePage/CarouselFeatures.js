import React from "react";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import AppIcon from '../../Assets/LogoImages/AppIcon.png';
import styled from 'styled-components';

const FeatureImage = styled.img`
height: 50px;
width: auto;
`;

class FeaturesCarousel extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            slides: [
                (<FeatureImage src="https://www.w3schools.com/bootstrap/ny.jpg" />),
                (<FeatureImage src="https://www.w3schools.com/bootstrap/ny.jpg" />),
                (<FeatureImage src="https://www.w3schools.com/bootstrap/ny.jpg" />),
            ],
            thumbnails: [
                (<FeatureImage src="https://www.w3schools.com/bootstrap/ny.jpg" />),
                (<FeatureImage src="https://www.w3schools.com/bootstrap/ny.jpg" />),
                (<FeatureImage src="https://www.w3schools.com/bootstrap/ny.jpg" />),
            ],
        }
        this.onchange = this.onchange.bind(this);
    }


    onchange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <Carousel
                    value={this.state.value}
                    slides={this.state.slides}
                />
                <Dots number={this.state.thumbnails.length} thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
            </div>
        );
    }
}

export default FeaturesCarousel;