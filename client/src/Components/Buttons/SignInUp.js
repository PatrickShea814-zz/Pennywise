import React from 'react';
import styled from 'styled-components';

const SignInUp = styled.button`
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 2px;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    color: #00a79d;
    background-color: transparent;
    text-decoration: none;
    border-radius: 1rem;
    user-select: none;
    border: none;
    &:hover {
        background-color: rgb(0, 167, 157, 0.65);
        color: white;
    }
    &:active {
        transform: translateY(1px);
    }
`;

function LoginSignin(props) {
    console.log('HELLO', props.onClick)
    return (
        <SignInUp>{props.AuthName}<i class="fas fa-user-plus"></i></SignInUp>
    )
}

export default LoginSignin;