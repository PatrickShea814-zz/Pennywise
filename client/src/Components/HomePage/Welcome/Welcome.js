import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DownloadExtension from '../../Buttons/DownloadExtension';
import LoginSignin from '../../Buttons/SignInUp';
import styled from 'styled-components';


const Introduction = styled.div`
    color: white;
    padding: 3% 5% 3% 5%;
    font-size: 1.5vw;
`;

const Title = styled.h1`
    font-size: 2em;
    letter-spacing: 3px;
`;

const Subtitle = styled.p`
    width: 90%;
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
                <Row>
                    <Col>
                        <Subtitle>Are You Pennywise?</Subtitle>
                    </Col>
                    <Col>
                        <LoginSignin AuthName={this.state.AuthName}></LoginSignin>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Subtitle>Chrome Extension.</Subtitle>
                    </Col>
                    <Col>
                        <DownloadExtension buttonName={this.state.buttonName}></DownloadExtension>
                    </Col>
                </Row>
            </Introduction>
        )
    }
}

export default Welcome;