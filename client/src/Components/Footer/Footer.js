import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    width: 100%;
    height:auto;
    display:flex;
    justify-content:center;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

const MainList = styled.ul`
    display:flex;
    text-align:center;
    letter-spacing: 2px;
    margin:0 auto;
    padding: 4% 0 0 0;
    li {
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        /* is 25 */
        width: 25%;
        /* Styles */
        list-style: none;
        margin: 0 0 2px;
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



class footer extends Component {
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
                        <a href="https://help.netflix.com/en/node/412"><span>Terms of Use</span></a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/en/node/412"><span>Privacy</span></a>
                    </li>
                </MainList>
            </Footer>
        )
    }
}

export default footer;