import React, { Component } from 'react';
import DownloadExtension from '../Buttons/DownloadExtension';
import styled from 'styled-components';

const Section = styled.section`
    color: white;
    margin: 8% auto;
    text-align: center;
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
    font-size: 1.8em;
    margin: 0 0 20px 0;
    letter-spacing: 3px;
`;

const Subtitle = styled.p`
    @media (max-width: 800px) {
        margin: 0 auto;
        text-align: center;
    }
`;

class DashMessage extends Component {
    constructor() {
        super();
        this.state = {
            buttonName: "Start Wishing!",
            GetStartedWelcome: 'Welcome to Pennywise!',
            WelcomeMessage: 'To get started you will need to add a bank account to your profile.',
            GetStartedAction: 'Connect your account:',
            ActionDetails: 'Securely sign into your bank portal using Plaid and select your account.'
        }
    }

    NewUserNoItems() {

        this.setState({
            GetStartedWelcome: '¯\\_(ツ)_/¯',
            WelcomeMessage: 'You currently do not have any wish list items!',
            GetStartedAction: 'Have all of your wishes came true?',
            ActionDetails: 'Download our Chrome Extension to start adding to your wish list.'
        });
    }

    render(props) {
        return (
            <Section>
                <Title>{this.state.GetStartedWelcome}</Title>
                <Subtitle>{this.state.WelcomeMessage}</Subtitle>
                <Title>{this.state.GetStartedAction} </Title>
                <Subtitle>{this.state.ActionDetails}</Subtitle>
                <DownloadExtension buttonName={this.state.buttonName}></DownloadExtension>
            </Section>
        )
    }
}

export default DashMessage;