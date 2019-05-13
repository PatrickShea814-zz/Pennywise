import React from 'react';
import {Component} from 'react';
import Wrapper from "./Components/Wrapper/Wrapper";
import NavBar from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Content/Welcome"
import './App.css';
import './App.scss'

class App extends Component{
  
  render(props){
    
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

}

export default App;
