/* global chrome */
import React, { Component } from 'react';
import Microlink from '@microlink/react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 50%;
`;

const MicroCard = styled(Microlink)`
display: inline-block;
width: 100%;
`;

class UpcomingItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemURL: 'https://www.getpennywise.io'
        };
    }

    render() {
        return (
            <MicroCard
                className='item-shadow'
                url={this.state.nextItemUrl}
                style={{ fontFamily: '"Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif' }}
                media={['video', 'image']}
                controls
            />
        )
    }
}

export default UpcomingItem;