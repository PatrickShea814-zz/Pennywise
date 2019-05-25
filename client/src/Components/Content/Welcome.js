import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RBCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import HomeCarousel from "./HomeCarousel";
import DownloadExtension from '../Buttons/DownloadExtension';
import LoginSignin from '../Buttons/SignInUp';
import styled from 'styled-components';
import DashMessage from './DashMessage';

const HomeLanding = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Section = styled.section`
    color: white;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    margin: 8% 0 8% 5%;
    font-size: 1.5vw;
    @media (max-width: 1000px) {
        font-size: 2vw;
    }
    @media (max-width: 800px) {
        font-size: 3vw;
        margin: 0 auto;
        text-align: center;
    }
`;

const Title = styled.h1`
    font-size: 2em;
    margin: 0 0 20px 0;
    letter-spacing: 3px;
`;

const Subtitle = styled.p`
    margin: 0 0 20px 0;
    @media (max-width: 800px) {
        margin: 0 auto;
        text-align: center;
    }
`;

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            buttonName: "Download Here!",
            AuthName: "Sign Up Today!"
        }
    }
    render() {
        const login = this.props.auth.login
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            return (
                <HomeLanding>
                    <Section>
                        <Title>Wish. Save. Reward.</Title>
                        <Subtitle>Purchase your wish list items with the change saved from rounding up everyday purchases.</Subtitle>
                        <Subtitle>Are You Pennywise?<LoginSignin AuthName={this.state.AuthName} onClick={() => login()}></LoginSignin></Subtitle>
                        <Subtitle>Chrome Extension.<DownloadExtension buttonName={this.state.buttonName}></DownloadExtension></Subtitle>
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