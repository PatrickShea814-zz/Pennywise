import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import '../../Assets/css/AboutUs.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegFilePdf } from 'react-icons/fa';
import { FaRegIdCard } from 'react-icons/fa';

const MemberName = styled.p`
color: #00a79d;
font-size: 18px;
font-weight: bold;
`;

const AboutMember = styled.p`
font-size: 16px;
min-height: 50px;
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
                    <a href="/#"><FaLinkedin className="linkedin"></FaLinkedin></a>
                    <a href="/#"><FaGithub className="github"></FaGithub></a>
                    <a href="/#"><FaRegFilePdf className="resume"></FaRegFilePdf></a>
                    <a href="/#"><FaRegIdCard className="website"></FaRegIdCard></a>
                </div>
            </Container>
        )
    }
}

export default MemberCard;