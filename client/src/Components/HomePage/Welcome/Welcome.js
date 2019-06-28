import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DownloadExtension from '../../Buttons/DownloadExtension';
import LoginSignin from '../../Buttons/SignInUp';
import styled from 'styled-components';


const Introduction = styled.div`
    margin: 5% 2% 0 8%;
    color: white;
    padding: 3% 5% 3% 5%;
`;

const Title = styled.h1`
    font-size: 2.5em;
    letter-spacing: 3px;
    margin-bottom: 3%;
`;

const Subtitle = styled.p`
    width: 90%;
    font-size: 1.3em;
    vertical-align: middle;
`;

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            buttonName: "Download Here",
            AuthName: "Sign Up Today!"
        }
    }
    render() {
        return (
            <Introduction>
                <Row>
                    <Col>
                        <Title>Wish. Save. Reward.</Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Subtitle>Purchase your wish list items with the change saved from rounding up everyday purchases.</Subtitle>
                    </Col>
                </Row>
                <Row className="WelcomeButtons">
                    <Col lg="6" md="12" sm="12">
                        <Subtitle>Are You Pennywise?</Subtitle>
                    </Col>
                    <Col lg="6" md="12" sm="12">
                        <LoginSignin AuthName={this.state.AuthName}></LoginSignin>
                    </Col>
                </Row>

                <Row className="WelcomeButtons">
                    <Col lg="6" md="12" sm="12">
                        <Subtitle>Chrome Extension.</Subtitle>
                    </Col>
                    <Col lg="6" md="12" sm="12">
                        <DownloadExtension buttonName={this.state.buttonName}></DownloadExtension>
                    </Col>
                </Row>
            </Introduction>
        )
    }
}

export default Welcome;