import React, { Component } from 'react';
import styled from 'styled-components';
import HomeNavBtn from "../Buttons/HomeNavBtn";
import UserNavBtn from "../Buttons/UserNavBtn";
import CurrentUserProfile from "../Buttons/CurrentUserProfile";
import pennywiselogo from '../../Assets/LogoImages/whitelogo.png';

const Nav = styled.nav`
    height: 10%;
    img {
        width: 240px;
        height : 70px;
        vertical-align: middle;
    }
    .logo {
        display: inline-block;
        line-height: 90px;
        margin: 0 0 0 3%;
    }
`;

const SignInButton = styled.button`
    font-size: 18px;
    letter-spacing: 2px;
    margin: 1.8% 3% 0 0;
    padding: 0.5rem 1rem;
    color: #00a79d;
    background-color: #ffffff;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 0.1rem;
    line-height: normal;
    border: none;
    box-shadow: 0px 5px 8px #888888;
    float: right;
    &:hover {
        background-color: #7AE0BB;
        color: white;
    }
    &:active {
        background-color: #00a79d;
        transform: translateY(1px);
    }
`;

class HomeNav extends Component {
    constructor() {
        super();
        this.state = {
            Contact: "Contact Us!",
            About: "About Us",
            Dashboard: "Dashboard",
            NavLogo: pennywiselogo,
        }
    }

    handleSidebar = animation => () =>
        this.setState(prevState => ({ visible: !prevState.visible }));
    render() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        const login = this.props.auth.login
        if (!isLoggedIn) {
            return (
                <Nav>
                    <a href={"/"} className="logo">
                        <img src={this.state.NavLogo} alt="PennyWise Logo" />
                    </a>
                    <SignInButton onClick={() => login()}>Sign In</SignInButton>
                    <HomeNavBtn navigationName={this.state.Contact}></HomeNavBtn>
                    <HomeNavBtn navigationName={this.state.About}></HomeNavBtn>
                </Nav>
            )
        }
        else return (
            <Nav>
                <a href={"/"} className="logo">
                    <img src={this.state.NavLogo} alt="PennyWise Logo" />
                </a>
                <CurrentUserProfile onClick={this.handleSidebar("overlay")} />
                <UserNavBtn navigationName={this.state.Dashboard}></UserNavBtn>
            </Nav>
        )
    }

}

export default HomeNav;