import React from 'react';
import styled from 'styled-components';

const SignInUp = styled.button`
    font-size: 16px;
    letter-spacing: 2px;
    margin: 0 1em 0 1em;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    padding: 12px 2em;
    color: #00a79d;
    background-color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 5px;
    user-select: none;
    text-align: center;
    border: 0;
    &:hover {
        background-color: #00a79d;
        color: white;
    }
`;

function LoginSignin(props) {
    return (
        <SignInUp>{props.AuthName}</SignInUp>
    )
}

export default LoginSignin;