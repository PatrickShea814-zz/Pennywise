import React, { Component } from 'react';
import styled from 'styled-components';

const NavigationButtons = styled.button`
    font-size: 16px;
    letter-spacing: 2px;
    margin: 15px 1% 15px 1%;
    padding: 0.5rem 1rem;
    color: white;
    background-color: #088f99;
    text-decoration: none;
    border-radius: 0.1rem;
    line-height: normal;
    border: transparent;
    &:hover {
        background-color: #7AE0BB;
    }
    &:active {
        background-color: #00A79D;
        transform: translateY(1px);
    }
`;
class HomeNavBtn extends Component {
    constructor(props) {
        super(props);
        this.navigationName = '';
    }
    render() {
        return (
            <NavigationButtons>{this.props.navigationName}</NavigationButtons>
        )
    }
}

export default HomeNavBtn;