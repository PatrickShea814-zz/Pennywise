import React from 'react';
import { Component } from 'react';
import Wrapper from "./Components/Wrapper/Wrapper";
import NavBar from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Content/Welcome";
import EmptyWishList from "./Components/Content/NoItemsDash";
import history from "./history";
import './App.css';
import Masonry from './Components/WishListDash/Masonry';
import DashInfo from './Components/Content/DashInfo/DashInfo';
import DashMessage from './Components/Content/DashMessage';


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
        <div className="Site-content">
          <Wrapper >
            <NavBar {...this.props} />
            {!isAuthenticated() ? (
              <div>
                <DashMessage {...this.props} />
                {/*<Masonry />*/}
              </div>
            ) : (
                <div>
                  <DashInfo />
                </div>
              )}
          </Wrapper>
          {!isAuthenticated() ? (
            <Footer /> ) : (
              <div>{null}</div>
          )}
        </div>
      </div>
    )
  }
}

export default App;
