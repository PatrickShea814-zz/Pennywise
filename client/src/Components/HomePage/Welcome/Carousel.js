import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageContainer = styled.div`
padding: 3% 5% 3% 5%;
`;

class NewCarousel extends Component {
    render() {
        return (
            <ImageContainer>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    autoPlay
                >
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                    </div>
                    <div>
                        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                    </div>
                </Carousel>
            </ImageContainer>
        );
    }
}

export default NewCarousel;