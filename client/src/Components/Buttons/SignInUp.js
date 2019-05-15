import React from 'react';
import styled from 'styled-components';

const SignInUp = styled.button`
    font-size: 18px;
    letter-spacing: 2px;
    margin: 0 1em 0 1em;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    padding: 0.5% 3%;
    color: #00a79d;
    background-color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 0px;
    user-select: none;
    text-align: center;
    box-shadow: 0px 5px 8px #888888;
    border: none;
    &:hover {
        background-color: #00a79d;
        color: white;
    }
    &:active {
        transform: translateY(1px);
    }
`;

function LoginSignin(props) {
    return (
        <SignInUp>{props.AuthName}</SignInUp>
    )
}

export default LoginSignin;