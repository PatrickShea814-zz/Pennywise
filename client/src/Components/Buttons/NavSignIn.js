import React from 'react';
import styled from 'styled-components';

const SignInUp = styled.button`
text-transform: uppercase;
font-size: 16px;
letter-spacing: 2px;
margin: 15px 2% 15px 1%;
padding: 0.5rem 1rem;
color: white;
background-color: #00a79d;
text-decoration: none;
border-radius: 1rem;
line-height: normal;
border: none;
box-shadow: 0 0 8px 0px #33313147;
&:hover {
    background-color: #7AE0BB;
    box-shadow: 0 0 8px 0px #33313147;
    color: white;
}
&:active {
    background-color: #00a79d;
    transform: translateY(1px);
}
`;

function SignInButton(props) {
    return (
        <SignInUp onClick={props.onClick}>Sign In <i class="fas fa-sign-in-alt"></i></SignInUp>
    )
}

export default SignInButton;