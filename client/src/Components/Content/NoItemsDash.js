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

class EmptyWishList extends Component {
    constructor() {
        super();
        this.state = {
            noItems: '¯\\_(ツ)_/¯',
            buttonName: "Start Wishing!"
        }
    }
    render() {
        return (
            <Section>
                <Title>{this.state.noItems}</Title>
                <Subtitle>You currently do not have any wish list items!</Subtitle>
                <Title>Have all of your wishes came true?</Title>

                <Subtitle>Download our Chrome Extension to start adding to your wish list.</Subtitle>
                <DownloadExtension buttonName={this.state.buttonName}></DownloadExtension>
            </Section>
        )
    }
}

export default EmptyWishList;