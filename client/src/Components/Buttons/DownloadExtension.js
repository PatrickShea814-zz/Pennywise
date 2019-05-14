import React from 'react';
import styled from 'styled-components';

const ExtensionButton = styled.button`
    font-size: 16px;
    letter-spacing: 2px;
    margin: 0 1.9em 0 2.3em;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    padding: 12px 1.8em;
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

function DownloadExtension(props) {
    return (
        <ExtensionButton>{props.buttonName}</ExtensionButton>
    )
}

export default DownloadExtension;