import React from 'react';
import { Component } from 'react';
import Wrapper from "./Components/Wrapper/Wrapper";
import NavBar from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Content/Welcome";
import EmptyWishList from "./Components/Content/NoItemsDash";
import history from "./history";
import './App.scss';
import './App.css';
import Masonry from './Components/WishListDash/Masonry';
import NextItem from './Components/Content/NextItem';

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
              <Welcome {...this.props} />
            ) : (
                <div>
                  <NextItem />
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
