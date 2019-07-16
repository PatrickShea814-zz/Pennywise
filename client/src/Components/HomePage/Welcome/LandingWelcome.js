import React, { Component } from 'react';
import { Row, Col, CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Welcome from './Welcome';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import FeatureCard from './FeatureCards';
import FeaturesInfo from './FeaturesInfo';

const WelcomeWrapper = styled.div`
    background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.75), 
        rgba(0, 0, 0, 0.09)
        )
`;

const ImageContainer = styled.div`
    margin: auto;
    max-width: 100%;
`;

const Slide = styled.img`
    height: 400px;
    width: 100%;
`;


class LandingWelcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoplay: true,
            images: [
                "https://www.w3schools.com/bootstrap/ny.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg"
            ],
            activeIndex: 0
        };
    }

    onSelect = (active) => {
        this.setState({ activeIndex: active })
    };

    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };

    goToSlide = i => {
        this.slider.goToSlide(i);
    };


    render() {
        let { leftIcon, rightIcon } = this.state;
        return (
            <WelcomeWrapper>
                <Row>
                    <Col lg="6" md="12" sm="12">
                        <Welcome />
                    </Col>
                    <Col lg="6" md="12" sm="12">
                        <ImageContainer>
                            <RBCarousel
                                animation={true}
                                autoplay={this.state.autoplay}
                                slideshowSpeed={3000}
                                leftIcon={leftIcon}
                                rightIcon={rightIcon}
                                onSelect={this.onSelect}
                                ref={r => (this.slider = r)}
                                version={4}
                                indicators={false}
                            >
                                {
                                    this.state.images.map((image, index) => (
                                        <Slide key={index}
                                            src={image} />))
                                }
                            </RBCarousel>
                        </ImageContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardGroup className="CardWrap">
                            {
                                FeaturesInfo.map((item, index) => {
                                    return <FeatureCard key={index} isActive={this.state.activeIndex === index} goToSlide={() => this.goToSlide(index)} icon={require(`../../../Assets/FeaturesImages/${item.icon}`)} title={item.title} description={item.description} />
                                })
                            }
                        </CardGroup>
                    </Col>
                </Row>
            </WelcomeWrapper>
        )
    }
}

export default LandingWelcome;

