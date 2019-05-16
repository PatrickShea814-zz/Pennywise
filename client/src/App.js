import React from 'react';
import { Component } from 'react';
import './Components/DarkMode/styles.scss';
import Wrapper from "./Components/Wrapper/Wrapper";
import NavBar from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Content/Welcome";
import EmptyWishList from "./Components/Content/NoItemsDash";
import history from "./history";
import './App.css';
import './Components/DarkMode/styles.scss';
import Masonry from './Components/WishListDash/Masonry';
import DashInfo from './Components/Content/DashInfo/DashInfo';
import DashMessage from './Components/Content/DashMessage';
import UserDropdown from './Components/SideNav/UserDropdown';


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

        <div className="Site-content">
          <Wrapper >
            <NavBar {...this.props} />
            {!isAuthenticated() ? (
              <Welcome {...this.props} />
            ) : (
                <div>
                  <UserDropdown />
                  <DashInfo />
                  <Masonry />
                </div>
              )}
          </Wrapper>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
