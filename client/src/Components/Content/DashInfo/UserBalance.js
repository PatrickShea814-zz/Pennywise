import React, { Component } from 'react';
import WithdrawalButton from '../../Buttons/Withdrawal';
import styled from 'styled-components';


const BalanceWrap = styled.div`
    border: 1px solid white;
    border-radius: 10px;
    margin: 0 5%;
    padding: 2% 0 2% 0;
    background-color: white;
`;

const Balance = styled.h1`
    font-size: 18px;
    padding: 0.5%;
    letter-spacing: 2px;
    margin: 2% auto;
    color: #00a79d;
    background-color: transparent;
    text-decoration: none;
    vertical-align: middle;
    line-height: normal;
`;

const NextItem = styled.h1`
    font-size: 18px;
    padding: 0.5%;
    letter-spacing: 2px;
    margin: 2% auto;
    color: #00a79d;
    background-color: transparent;
    text-decoration: none;
    vertical-align: middle;
    line-height: normal;
`;


class MyBalance extends Component {
    render() {
        return (
            <BalanceWrap>
                <NextItem>Next Item: $55.98</NextItem>
                <Balance>Pennybank Balance: $53.49</Balance>
                <WithdrawalButton />
            </BalanceWrap>
        )
    }
}

export default MyBalance;