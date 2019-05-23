import React, { Component } from 'react';
import styled from 'styled-components';
import '../../Assets/css/AboutUs.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegFilePdf } from 'react-icons/fa';
import { FaRegIdCard } from 'react-icons/fa';

const MemberName = styled.p`
font-size: 18px;
font-weight: bold;
`;

const AboutMember = styled.p`
font-size: 16px;
display: flex;
`;

class MemberCard extends Component {
    render() {
        return (
            <div id={this.props.id} className={`pane ${this.props.class}`}>
                <img className="pane-image" src={this.props.photo} alt={this.props.name} />
                <MemberName>{this.props.name}</MemberName>
                <p>{this.props.description}</p>

                <div className="socialProfiles">
                    <a href="/#"><FaLinkedin className="linkedin"></FaLinkedin></a>
                    <a href="/#"><FaGithub className="github"></FaGithub></a>
                    <a href="/#"><FaRegFilePdf className="resume"></FaRegFilePdf></a>
                    <a href="/#"><FaRegIdCard className="website"></FaRegIdCard></a>
                </div>
            </div>
        )
    }
}

export default MemberCard;