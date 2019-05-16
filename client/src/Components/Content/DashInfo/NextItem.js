import React, { Component } from 'react';
import WithdrawalButton from '../../Buttons/Withdrawal'
import Microlink from '@microlink/react'
import styled from 'styled-components';

const Section = styled.section`
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    border: 1px solid white;
    width: 40%;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 2vw;
    @media (max-width: 1000px) {
        font-size: 2vw;
    }
    @media (max-width: 800px) {
        font-size: 3vw;
    }
`;

const NextItemWrapper = styled.div`
    padding: 3%;
    text-align: center;
    margin: 0;
`;

const NextMicroCard = styled(Microlink)`
    margin: 0.5%;
    box-shadow: 0px 5px 8px #888888;
`;

const Subtitle = styled.p`
    @media (max-width: 800px) {
        margin: 0 auto;
        text-align: center;
    }
`;

class NextItem extends Component {
    constructor() {
        super();
        this.state = {
            nextItemUrl: 'www.amazon.com'
        }
    }
    render() {
        return (
            <NextItemWrapper>
                <NextMicroCard
                    className='item-shadow'
                    url={this.state.nextItemUrl}
                    style={{ fontFamily: '"Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif' }}
                    media={['video', 'image']}
                    controls
                />
            </NextItemWrapper>

        )
    }
}

export default NextItem;