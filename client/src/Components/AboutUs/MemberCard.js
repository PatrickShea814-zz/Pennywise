import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import '../../Assets/css/AboutUs.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegFilePdf } from 'react-icons/fa';
import { FaRegIdCard } from 'react-icons/fa';

const MemberName = styled.p`
margin: 0;
padding: 2% 0;
color: #00a79d;
font-size: 18px;
font-weight: bold;
cursor: default;
`;

const AboutMember = styled.p`
margin: 0;
font-size: 16px;
min-height: 50px;
cursor: default;
`;

class MemberCard extends Component {
    render() {
        return (
            <Container className="pane">
                <Row>
                    <Col>
                        <img className="pane-image" src={this.props.photo} alt={this.props.name} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MemberName>{this.props.name}</MemberName>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AboutMember>{this.props.description}</AboutMember>
                    </Col>
                </Row>
                <div className="socialProfiles">
                    <a href={this.props.linkedin} target="blank"><FaLinkedin className="linkedin"></FaLinkedin></a>
                    <a href={this.props.github} target="blank"><FaGithub className="github"></FaGithub></a>
                    <a href={this.props.resume} target="blank"><FaRegFilePdf className="resume"></FaRegFilePdf></a>
                    <a href={this.props.website} target="blank"><FaRegIdCard className="website"></FaRegIdCard></a>
                </div>
            </Container>
        )
    }
}

export default MemberCard;