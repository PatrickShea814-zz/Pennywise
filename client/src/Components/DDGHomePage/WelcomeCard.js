import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import DownloadExtension from '../Buttons/DownloadExtension';
import LoginSignin from '../Buttons/SignInUp';
import Logo from '../../Assets/LogoImages/GradientHorizontal.png';

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 40px;
    text-align: center;
`;

const HomeMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    width: 30%;
    height: auto;
    background-color: rgba(243, 235, 228, 0.8);
    border-radius: 1px;
    box-shadow: 1px 6px 8px 0px #615f5f2e;
`;

const Title = styled.h2`
    margin: 5% 2%;
`;

const Description = styled.h3`
    font-size: 1rem;
    text-transform: uppercase;
    margin: 5% 2%;
`;

const BtnLabel = styled.h2`
    font-size: 1.25rem;
    margin: 5% 0;
`;

const WelcomeLogo = styled.img`
    width: 60%;
    height : auto;
`;

class HomeCard extends Component {
    constructor() {
        super();
        this.state = {
            buttonName: "Download ",
            AuthName: "Sign Up "
        }
    }
    render() {
        return (
            <HomeContainer>
                <HomeMessage>
                    <header>
                        <WelcomeLogo src={Logo}
                            alt="PennyWise Logo" />
                        <Title>Wish. Save. Reward.</Title>
                        <Description>Save up for your wish list items by rounding up the change on everyday purchases.</Description>
                        <Row>
                            <Col>
                                <BtnLabel>Are you Pennywise?</BtnLabel>
                                <LoginSignin AuthName={this.state.AuthName}></LoginSignin>
                            </Col>
                            <Col>
                                <BtnLabel>Chrome Extension.</BtnLabel>
                                <DownloadExtension buttonName={this.state.buttonName}></DownloadExtension>
                            </Col>
                        </Row>
                    </header>
                </HomeMessage>
            </HomeContainer>
        )
    }
};

export default HomeCard;