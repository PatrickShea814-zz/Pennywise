import React, { Component } from 'react';
import DownloadExtension from '../Buttons/DownloadExtension';
import styled from 'styled-components';

const Section = styled.section`
    color: white;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    margin: 10% auto;
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
            GetStartedWelcome: 'Welcome to Pennywise!',
            WelcomeMessage: 'To get started you will need to add a bank account to your profile.',
            GetStartedAction: 'Select your account using Plaid.',
            ActionDetails: 'Plaid allows you to securely sign into your bank institution and choose the account you wish to connect.'
        }
    }

    componentDidMount() {

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
                <Title>{props.GetStartedWelcome}</Title>
                <Subtitle>{props.WelcomeMessage}</Subtitle>
                <Title>{props.GetStartedAction} </Title>
                <Subtitle>{props.ActionDetails}</Subtitle>
                <DownloadExtension buttonName={this.state.buttonName}></DownloadExtension>
            </Section>
        )
    }
}

export default DashMessage;