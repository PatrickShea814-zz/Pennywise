import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeCarousel from "./HomeCarousel";
import DownloadExtension from '../Buttons/DownloadExtension';
import LoginSignin from '../Buttons/SignInUp';
import styled from 'styled-components';
import DashMessage from './DashMessage';

const HomeLanding = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 3% 5% 3% 5%;
    background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.75), 
        rgba(0, 0, 0, 0.09)
        )
`;

const Section = styled.section`
    color: white;
    margin: auto 5% auto 0;
    font-size: 1.5vw;
`;

const Title = styled.h1`
    font-size: 2em;
    margin: 0 0 2% 0;
    letter-spacing: 3px;
`;

const Subtitle = styled.p`
    width: 90%;
    margin: 0 0 20px 0;
    padding-top: 2%;
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
        const login = this.props.auth.login;
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            return (
                <HomeLanding>
                    <Section>
                        <Title>Wish. Save. Reward.</Title>
                        <Subtitle>Purchase your wish list items with the change saved from rounding up everyday purchases.</Subtitle>
                        <Row>
                            <Col style={{ "padding-right": 0 }}>
                                <Subtitle>Are You Pennywise?</Subtitle>
                            </Col>
                            <Col style={{ "padding-left": 0 }}>
                                <LoginSignin AuthName={this.state.AuthName} onClick={()=>login()}></LoginSignin>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ "padding-right": 0 }}>
                                <Subtitle>Chrome Extension.</Subtitle>
                            </Col>
                            <Col style={{ "padding-left": 0 }}>
                                <DownloadExtension buttonName={this.state.buttonName}></DownloadExtension>
                            </Col>
                        </Row>
                    </Section>
                    <HomeCarousel />
                </HomeLanding>
            )
        }
        else return (
            <DashMessage />
        )
    }
}

export default Welcome;