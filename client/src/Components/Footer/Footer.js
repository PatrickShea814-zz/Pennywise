import React, { Component } from 'react';
import styled from 'styled-components';
import GreenAppIcon from '../../Assets/LogoImages/GradientOwl.png';


const Footer = styled.footer`
    background-color: white;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

const MainList = styled.ul`
    display: flex;
    flex-shrink: 1;
    text-align: center;
    letter-spacing: 2px;
    margin: 0 auto;
    padding: 3% 0 3% 0;
    li {
        width: 25%;
        margin: 0;
        /* Styles */
        list-style: none;
        min-width: 150px;
        font-size: 15px;
        a {
            text-decoration: none;
            span {
                color: #00a79d;
                &:hover {
                    text-decoration: underline;
                    color: #00a79d;
                }
            }
        }
    }
`;

const LogoFooter = styled.img`
    margin-top: -15px;
    height: 50px;
    width: auto;
`;



class footer extends Component {
    constructor() {
        super();
        this.state = {
            FooterLogo: GreenAppIcon
        }
    }
    render() {
        return (
            <Footer>
                <MainList>
                    <li>
                        <a href="https://help.netflix.com/en/node/412"><span>About Us</span></a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/en/node/412"><span>Contact Us</span></a>
                    </li>
                    <li>
                        <a href={"/"}><LogoFooter src={this.state.FooterLogo} alt="PennyWise Logo" /></a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/en/node/412"><span>Terms of Use</span></a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/en/node/412"><span>Privacy</span></a>
                    </li>
                </MainList>
                <MainList>
                </MainList>
            </Footer>
        )
    }
}

export default footer;