import React from 'react';
import {Component} from 'react';
import Wrapper from "./Components/Wrapper/Wrapper";
import NavBar from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Content/Welcome";
import history from "./history";
import './App.css';
import './App.scss';
import Masonry from './Components/WishListDash/Masonry';

class App extends Component{
  
  state = {
    loggedIn: false
  }

  componentDidMount(){
    if (this.props.auth.isAuthenticated()){
      this.setState({ loggedIn: true})
      history.replace('/masonry')
    }
  }

  render(){

    if(!this.state.loggedIn){
    return (
    <div className="App">
    <Wrapper >
      <NavBar {...this.props} />
      <Welcome {...this.props}/>
    </Wrapper>
    <Footer />
    </div>
  )
  }

  else {
    return (<>
    <Wrapper >
    <NavBar {...this.props} />
    <Masonry {...this.props} />
  </Wrapper>
  <div>
  <Footer />
  </div>
  </>
  )
  }
  
}

}

export default App;
