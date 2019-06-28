import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import GreenAppIcon from '../../Assets/LogoImages/GradientOwl.png';

const FooterLink = styled.a`
    text-align: center;
    display: flex;
    justify-content: space-around;
    letter-spacing: 2px;
    margin: 15px 10px 5px 10px;
    list-style: none;
    min-width: 150px;        
    font-size: 16px;
    text-decoration: none;
    span {
        color: #00a79d;
        &:hover {
            text-decoration: none;
            color: #00a79d;
`;

const LogoFooter = styled.img`
    margin-top: -15px;
    height: 50px;
    width: auto;
`;

class BootFooter extends Component {
    constructor() {
        super();
        this.state = {
            FooterLogo: GreenAppIcon
        }
    }
    render() {
        return (
            <Navbar className="justify-content-center" bg="light">
                <Nav className="flex-md-row flex-column">
                    <Nav.Item>
                        <FooterLink href="/"><span>About Us</span></FooterLink>
                    </Nav.Item>
                    <Nav.Item>
                        <FooterLink href="/contact"><span>Contact Us</span></FooterLink>
                    </Nav.Item>
                    <Nav.Item className="logoHide">
                        <FooterLink href="/">
                            <LogoFooter src={this.state.FooterLogo} alt="PennyWise Logo" /></FooterLink>
                    </Nav.Item>
                    <Nav.Item>
                        <FooterLink href="/"><span>Terms of Use</span></FooterLink>
                    </Nav.Item>
                    <Nav.Item>
                        <FooterLink href="/"><span>Privacy</span></FooterLink>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}

export default BootFooter;