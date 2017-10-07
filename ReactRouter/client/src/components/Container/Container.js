/* eslint-disable max-len */

import React from 'react'
import { Container } from 'semantic-ui-react'

export const MainContainer = ({children}) => {
  return(
  <div>
    <Container fluid>
    {children}
    </Container>
  </div>
  );
};  

/*export default MainContainer;*/