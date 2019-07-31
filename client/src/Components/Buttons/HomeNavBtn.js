import React, { Component } from 'react';
import styled from 'styled-components';

const NavigationButtons = styled.button`
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    margin: 15px 1% 15px 1%;
    padding: 0.5rem 1rem;
    color: white;
    background-color: transparent;
    text-decoration: underline;
    border-radius: 0.1rem;
    line-height: normal;
    border: none;
    border-radius: 1rem;
    -webkit-transition-duration: 0.6s; /* Safari */
    transition-duration: 0.6s;
    &:hover {
        background-color: rgb(122, 224, 187, 0.75);
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
    &:active {
        background-color: rgb(0, 167, 157, 0.9);
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