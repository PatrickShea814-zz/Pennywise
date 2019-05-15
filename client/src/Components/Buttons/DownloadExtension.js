import React from 'react';
import styled from 'styled-components';

const ExtensionButton = styled.button`
    font-size: 20px;
    letter-spacing: 2px;
    margin: 0 1.9em 0 2.3em;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    padding: 10px 1em;
    color: #00a79d;
    background-color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 0px;
    user-select: none;
    text-align: center;
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