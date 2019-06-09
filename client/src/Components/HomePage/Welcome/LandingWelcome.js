import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Welcome from './Welcome';
import NewCarousel from './Carousel';
import Features from './Features';



const WelcomeWrapper = styled.div`
    background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.75), 
        rgba(0, 0, 0, 0.09)
        )
`;

class LandingWelcome extends Component {
    render() {
        return (
            <WelcomeWrapper>
                <Row>
                    <Col>
                        <Welcome />
                    </Col>
                    <Col>
                        <NewCarousel />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Features />
                    </Col>
                </Row>
            </WelcomeWrapper>
        )
    }
}

export default LandingWelcome;

