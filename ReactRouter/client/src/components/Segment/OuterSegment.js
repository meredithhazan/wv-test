import React from 'react'
import { Segment } from 'semantic-ui-react'

export const OuterSegment = props => 
  <Segment.Group raised>
    <Segment textAlign='center'>
    {props.children}
    </Segment>
  </Segment.Group>;


