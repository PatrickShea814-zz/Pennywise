import React from 'react';
import styled from 'styled-components';

const NavigationButtons = styled.button`
    font-size: 18px;
    letter-spacing: 2px;
    margin: 18px 3% 0 0;
    padding: 10px 2em;
    color: white;
    background-color: #088f99;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 0px;
    text-align: center;
    line-height: normal;
    border: transparent;
    box-shadow: 0px 3px 8px #888888;
        float: right;
    &:hover {
        background-color: #7AE0BB;
    }
    &:active {
        background-color: #00A79D;
        transform: translateY(1px);
    }
`;

function HomeNavBtn(props) {
    return (
        <NavigationButtons>{props.navigationName}</NavigationButtons>
    )
}

export default HomeNavBtn;