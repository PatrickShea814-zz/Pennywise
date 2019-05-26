import React from 'react';
import styled from 'styled-components';

const UserNavigationBtn = styled.button`
    font-size: 18px;
    letter-spacing: 2px;
    margin: 1.8% 3% 0 0;
    padding: 0.5rem 1rem;
    color: #00a79d;
    background-color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 0.1rem;
    text-align: center;
    line-height: normal;
    border: none;
    box-shadow: 0px 5px 8px #888888;
    float: right;
    &:hover {
        background-color: #7AE0BB;
        color: white;
    }
    &:active {
        background-color: #00a79d;
        transform: translateY(1px);
    }
`;

function UserNavBtn(props) {
    return (
        <UserNavigationBtn>{props.navigationName}</UserNavigationBtn>
    )
}

export default UserNavBtn;