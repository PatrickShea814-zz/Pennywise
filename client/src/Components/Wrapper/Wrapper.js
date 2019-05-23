import React, { Component } from 'react';

import styled from 'styled-components';

const PageWrapper = styled.header`
height: 100%;
background:
linear-gradient(225deg, #7ae0bb, #00a79d);

-webkit-animation: AnimationName 30s ease infinite;
-moz-animation: AnimationName 30s ease infinite;
-o-animation: AnimationName 30s ease infinite;
animation: AnimationName 30s ease infinite;

@-webkit-keyframes AnimationName {
   0%{background-position:0% 50%}
   50%{background-position:100% 50%}
   100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
   0%{background-position:0% 50%}
   50%{background-position:100% 50%}
   100%{background-position:0% 50%}
}
@-o-keyframes AnimationName {
   0%{background-position:0% 50%}
   50%{background-position:100% 50%}
   100%{background-position:0% 50%}
}
@keyframes AnimationName { 
   0%{background-position:0% 50%}
   50%{background-position:100% 50%}
   100%{background-position:0% 50%}
}
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