import React, { Component } from 'react';

class Wrapper extends Component {

   render(props) {

      return (
         <header>
            {this.props.children}
         </header>
      )
   }
}

export default Wrapper;