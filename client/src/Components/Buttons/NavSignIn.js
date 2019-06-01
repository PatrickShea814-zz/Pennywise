import React from 'react';
import styled from 'styled-components';

const SignInUp = styled.button`
font-size: 16px;
letter-spacing: 2px;
margin: 15px 2% 15px 1%;
padding: 0.5rem 1rem;
color: #00a79d;
background-color: #ffffff;
text-decoration: none;
border-radius: 0.1rem;
line-height: normal;
border: none;
box-shadow: 0px 5px 8px #888888;
&:hover {
    background-color: #7AE0BB;
    color: white;
}
&:active {
    background-color: #00a79d;
    transform: translateY(1px);
}
`;

function SignInButton() {
    return (
        <SignInUp>Sign In</SignInUp>
    )
}

export default SignInButton;