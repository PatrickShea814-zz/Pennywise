import React, { Component } from 'react';
// import MagicLamp from '../Nav/img/greenlamp.png';
import styled from 'styled-components';



const Section = styled.section`
    color: #00a79d;
    margin-top: 10%;
    text-align: center;
    justify-content: center;
`;

class Wrapper extends Component {
    render() {
        return (
            <Section>
                <MyBalance />
                <ItemPreview />
                <SaveItem />
                <GoToDashboard />
            </Section>
        )
    }
}

export default Wrapper;