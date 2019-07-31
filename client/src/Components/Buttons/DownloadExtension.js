import React from 'react';
import styled from 'styled-components';

const ExtensionButton = styled.button`
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
        background-color: rgb(0, 167, 157, 0.65);
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
        color: white;
    }
    &:active {
        transform: translateY(1px);
    }
`;

function DownloadExtension(props) {
    return (
        <ExtensionButton>{props.buttonName}<i class="fab fa-chrome"></i></ExtensionButton>
    )
}

export default DownloadExtension;