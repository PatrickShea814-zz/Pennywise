import React from 'react';
import styled from 'styled-components';

const Withdrawal = styled.button`
    font-size: 18px;
    letter-spacing: 2px;
    padding: 12px 1.5em;
    margin-top: 5%;
    width: 50%;
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
        border: 1px solid #00a79d;
        color: white;
    }
`;

function WithdrawalButton(props) {
    return (
        <Withdrawal currentBalance={props.currentBalance}>Withdraw</Withdrawal>
    )
}

export default WithdrawalButton;