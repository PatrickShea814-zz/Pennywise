import React from 'react';
import { Component } from 'react';
import './Components/DarkMode/styles.scss';
import HomeNav from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer";
import history from "./history";
import './App.css';
import './Components/DarkMode/styles.scss';
import Masonry from './Components/WishListDash/Masonry';
import DashInfo from './Components/Content/DashInfo/DashInfo';
import UserDropdown from './Components/SideNav/UserDropdown';
import AboutUs from "./Components/AboutUs/AboutUs";
import LandingWelcome from './Components/HomePage/Welcome/LandingWelcome';

class App extends Component {

  state = {
    loggedIn: false,
    dimmed: true,
    visible: false
  }

  handleSidebar = animation => () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      this.setState({ loggedIn: true })
      history.replace('/masonry')
    }
  }

  render() {
    const { dimmed, visible } = this.state;
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="App">
        <HomeNav {...this.props} />
        {!isAuthenticated() ? (
          <div>
            <LandingWelcome />
            <AboutUs />
          </div>
        ) : (
            <div>
              <UserDropdown />
              <DashInfo />
              <Masonry />
            </div>
          )}
        <Footer />
      </div>
    )
  }
}

export default App;
