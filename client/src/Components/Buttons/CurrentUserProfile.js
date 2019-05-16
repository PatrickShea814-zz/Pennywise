import React from 'react';
import GradientOwl from "../../Assets/LogoImages/GradientOwl.png";
import styled from 'styled-components';

const CurrentUser = styled.button`
font-size: 18px;
letter-spacing: 2px;
margin: 1.8% 3% 0 0;
padding: 10px 2em;
color: white;
background-color: #7AE0BB;
cursor: pointer;
text-decoration: none;
vertical-align: middle;
border-radius: 0px;
text-align: center;
line-height: normal;
border: none;
box-shadow: 0px 5px 8px #888888;
float: right;
&:hover {
    background-color: #00a79d;
    color: white;
}
&:active {
    background-color: white;
    transform: translateY(1px);
}
`;

const ProfilePic = styled.img`
    border-radius: 10px;
    /* Prevent background color leak outs */
    -webkit-background-clip: padding-box; 
    -moz-background-clip: padding; 
    background-clip: padding-box;
`;

function CurrentUserProfile(props) {
    return (
        <CurrentUser className="bm-burger-button">{props.UserName}
            Tony Dang
        </CurrentUser>
    )
}

export default CurrentUserProfile;