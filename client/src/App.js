import React from 'react';
import { Component } from 'react';
import Wrapper from "./Components/Wrapper/Wrapper";
import NavBar from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Content/Welcome";
import EmptyWishList from "./Components/Content/NoItemsDash";
import history from "./history";
import SideNavigation from "./Components/SideNav/SideNav";
import './App.scss';
import './App.css';
import Masonry from './Components/WishListDash/Masonry';

class App extends Component {

  state = {
    loggedIn: false
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      this.setState({ loggedIn: true })
      history.replace('/masonry')
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="App">
        <SideNavigation />
        <div className="Site-content">
          <Wrapper >
          <NavBar {...this.props} />
          {!isAuthenticated() ? (
            <Welcome {...this.props} />
          ) : (
            <Masonry />
          )}
          </Wrapper>
        </div>
        <Footer />
      </div>
    )
  }

}

export default App;
