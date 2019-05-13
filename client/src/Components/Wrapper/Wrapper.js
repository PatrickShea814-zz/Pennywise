import React, { Component } from 'react';

import styled from 'styled-components';

const PageWrapper = styled.header`
background: 
linear-gradient(225deg, #7ae0bb, #00a79d);
background-size: 400% 400%;

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
           height: 90vh;
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