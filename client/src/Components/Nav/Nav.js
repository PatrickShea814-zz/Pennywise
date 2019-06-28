import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import HomeNavBtn from "../Buttons/HomeNavBtn";
import UserNavBtn from "../Buttons/UserNavBtn";
import CurrentUserProfile from "../Buttons/CurrentUserProfile";
import SignInButton from "../Buttons/NavSignIn";
import pennywiselogo from '../../Assets/LogoImages/whitelogo.png';
import Contact from "../Contact/index";

const NavLogo = styled.img`
    width: 240px;
    height : 70px;
`;

class HomeNav extends Component {
    constructor() {
        super();
        this.state = {
            Contact: "Contact Us!",
            About: "About Us",
            Dashboard: "Dashboard",
            NavLogo: pennywiselogo
        }
    }

    handleSidebar = animation => () =>
        this.setState(prevState => ({ visible: !prevState.visible }));
    render() {
        console.log("WHAT I'M LOOKING FOR",this.props.auth)
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        const login = this.props.auth.login
        if (!isLoggedIn) {
            return (
                <Navbar className="NavbarBackground" expand="lg">
                    <Navbar.Brand >
                        <NavLogo
                            src={this.state.NavLogo}
                            alt="PennyWise Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="NavAlign">
                        <HomeNavBtn navigationName={this.state.Contact}></HomeNavBtn>
                        <HomeNavBtn navigationName={this.state.About}></HomeNavBtn>
                        <SignInButton onClick={()=>login()}>Sign In</SignInButton>
                    </Navbar.Collapse>
                </Navbar>

            )
        }
        else return (
            <Navbar expand="lg">
                <Navbar.Brand >
                    <img
                        src={this.state.NavLogo}
                        alt="PennyWise Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle bg="light" />
                <Navbar.Collapse className="justify-content-end">
                    <CurrentUserProfile onClick={this.handleSidebar("overlay")} />
                    <UserNavBtn navigationName={this.state.Dashboard}></UserNavBtn>
                </Navbar.Collapse>
            </Navbar>

        )
    }

}

export default HomeNav;