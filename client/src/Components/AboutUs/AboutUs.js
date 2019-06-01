import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import MemberInfo from './MemberInfo';
import '../../Assets/css/AboutUs.css';
import DeckCard from "./DeckCard";

const AboutTitle = styled.h1`
    color: white;
    padding: 0 5%;
    font-size: 1.5em;
    margin: 0 0 20px 0;
    letter-spacing: 3px;
`;

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us" id="about-us">
                <AboutTitle>The Penny Wise Men<hr /></AboutTitle>
                <Row>
                    <Col lg="12" md="12" sm="12">
                        <div className="featured-panes">
                            {
                                MemberInfo.map((item, index) => {
                                    return <DeckCard key={index} name={item.name} description={item.description} photo={require(`../../Assets/TeamImages/${item.photo}`)} class={item.class} linkedin={item.linkedin} github={item.github} resume={item.resume} website={item.website} />
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AboutUs;
