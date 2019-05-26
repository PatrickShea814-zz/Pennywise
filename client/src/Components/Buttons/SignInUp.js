import React from 'react';
import styled from 'styled-components';

const SignInUp = styled.button`
    font-size: 18px;
    letter-spacing: 2px;
    margin: auto;
    padding: 0.5rem 1rem;
    color: #00a79d;
    background-color: #ffffff;
    text-decoration: none;
    border-radius: 0.1rem;
    user-select: none;
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