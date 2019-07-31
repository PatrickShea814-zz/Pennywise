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
    -webkit-transition-duration: 0.6s; /* Safari */
    transition-duration: 0.6s;
    &:hover { 
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
        background-color: rgb(0, 167, 157, 0.65);
        color: white;
    }
    &:active {
        transform: translateY(1px);
    }
`;

function LoginSignin(props) {
    return (
        <SignInUp onClick={props.onClick}>{props.AuthName} <i class="fas fa-user-plus"></i></SignInUp>
    )
}

export default LoginSignin;