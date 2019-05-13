import React from 'react';
import Wrapper from "./Components/Wrapper/Wrapper";
import NavBar from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Content/Welcome"
import './App.css';
import './App.scss'

function App(props) {
  console.log('PROPS', props)
  return (
    <div className="App">
    <Wrapper >
      <NavBar {...props} />
      <Welcome {...props}/>
    </Wrapper>
    <Footer />
    </div>
  )
  
}

export default App;
