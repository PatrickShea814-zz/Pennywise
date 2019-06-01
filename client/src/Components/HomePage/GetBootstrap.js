import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import styled from 'styled-components';

const ImageContainer = styled.div`
    margin: auto;
    max-width: 100%;
`;

const Slide = styled.div`
    height: 400px;
    width: 100%;
`;


class HomeCarousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        };
    }
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };

    render() {
        return (
            <ImageContainer>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </ImageContainer>
        );
    }
}

export default HomeCarousel;