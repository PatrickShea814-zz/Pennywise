import React from 'react';
import styled from 'styled-components';

const Withdrawal = styled.button`
    font-size: 20px;
    letter-spacing: 2px;
    padding: 10px 1em;
    margin-top: 5%;
    width: 90%;
    color: white;
    background-color: #7ae0bb;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid #7ae0bb;
    box-shadow: 0px 5px 8px #888888;
    text-align: center;
    line-height: normal;
    &:hover {
        background-color: #00a79d;
        border: none;
        color: white;
    }
`;

function WithdrawalButton(props) {
    return (
        <Withdrawal currentBalance={props.currentBalance}>Withdraw</Withdrawal>
    )
}

export default WithdrawalButton;