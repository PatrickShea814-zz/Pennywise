import React, { Component } from 'react';
import styled from 'styled-components';
import MemberCard from './MemberCard';
import MemberInfo from './MemberInfo';
import '../../Assets/css/AboutUs.css';
import WeddingBW from '../../Assets/TeamImages/WeddingBW.JPG'

const AboutTitle = styled.h1`
color: white;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
font-size: 2em;
    margin: 0 0 20px 0;
    letter-spacing: 3px;
`;

const Section = styled.section`
    color: white;
    font-family: "Arial Rounded MT", "Helvetica Rounded", Arial, sans-serif;
    margin: 8% 5%;
    @media (max-width: 1000px) {
    }
    @media (max-width: 800px) {
        font-size: 3vw;
        margin: 0 auto;
        text-align: center;
    }
`;

const Subtitle = styled.p`
    width: 50%;
    margin: 0 0 20px 0;
    @media (max-width: 800px) {
        margin: 0 auto;
        text-align: center;
    }
`;

class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            ProfilePic: WeddingBW
        }
    }
    render() {
        const featuredPanes = MemberInfo;
        return (
            <div className="about-us">
                <AboutTitle>About Us</AboutTitle>
                <hr />
                <div className="featured-panes">
                    {
                        featuredPanes.map((item, index) => {
                            return <MemberCard key={index} name={item.name} description={item.description} src={this.state.ProfilePic} class={item.class} />
                        })
                    }
                </div>
                <Section>
                    <Subtitle>Hello we are 4 memebers of pennywise and started this while in our Georgia Tech Bootcamp program as a final project. Hope you like it. If not GTFO.</Subtitle>
                </Section>
            </div>
        )
    }
}

export default AboutUs;