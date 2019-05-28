import React, { Component } from 'react';

import styled from 'styled-components';

const PageWrapper = styled.header`

`;

class Wrapper extends Component {

   render(props) {

      return (
         <PageWrapper>
            {this.props.children}
         </PageWrapper>
      )
   }
}

export default Wrapper;