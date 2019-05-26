import React from 'react';
import styled from 'styled-components';

const ExtensionButton = styled.button`
    font-size: 18px;
    letter-spacing: 2px;
    margin: auto;
    padding: 0.5rem 1rem;
    color: #00a79d;
    background-color: #ffffff;
    text-decoration: none;
    border-radius: 0.1rem;
    user-select: none;
    border: none;
    box-shadow: 0px 5px 8px #888888;
    &:hover {
        background-color: #00a79d;
        color: white;
    }
    &:active {
        transform: translateY(1px);
    }
`;

function DownloadExtension(props) {
    return (
        <ExtensionButton>{props.buttonName}</ExtensionButton>
    )
}

export default DownloadExtension;