import React from "react";
import { Grid } from 'semantic-ui-react'

export const GridContainer = ({children}) => 
  <Grid columns='equal'>
      {children}
  </Grid>;

