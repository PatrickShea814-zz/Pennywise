import React, { Component } from 'react';
import WithdrawalButton from '../../Buttons/Withdrawal';
import styled from 'styled-components';


const BalanceWrap = styled.div`
    border: 1px solid white;
    border-radius: 10px;
    margin: 0 5%;
    text-align: center;
    justify-content: center;
    padding: 2% 0 2% 0;
`;

const Balance = styled.h1`
    font-size: 18px;
    padding: 0.5%;
    letter-spacing: 2px;
    margin: 0 auto;
    color: white;
    background-color: transparent;
    text-decoration: none;
    vertical-align: middle;
    line-height: normal;
`;


class MyBalance extends Component {
    render() {
        return (
            <BalanceWrap>
                <Balance>Pennybank Balance: $53.49</Balance>
                <WithdrawalButton />
            </BalanceWrap>
        )
    }
}

export default MyBalance;