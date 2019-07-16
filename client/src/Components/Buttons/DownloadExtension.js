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
    &:hover {
        background-color: rgb(0, 167, 157, 0.65);
        box-shadow: 0 0 8px 0px #33313147;
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