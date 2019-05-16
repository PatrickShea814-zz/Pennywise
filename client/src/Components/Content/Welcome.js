import React, { Component } from 'react';
import DownloadExtension from '../Buttons/DownloadExtension';
import LoginSignin from '../Buttons/SignInUp';
import styled from 'styled-components';
import DashMessage from './DashMessage';

const Section = styled.section`
    color: white;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    margin: 8% 5%;
    font-size: 2vw;
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
    width: 50%;
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
                <Section>
                    <Title>Wish. Save. Reward.</Title>
                    <Subtitle>Purchase your wish list items with the change saved from rounding up everyday purchases.</Subtitle>
                    <Subtitle>Are You Pennywise?<LoginSignin AuthName={this.state.AuthName} onClick={() => login()}></LoginSignin></Subtitle>
                    <Subtitle>Chrome Extension.<DownloadExtension buttonName={this.state.buttonName}></DownloadExtension></Subtitle>
                </Section>
            )
        }
        else return (
            <DashMessage />
        )
    }
}

export default Welcome;