import React from 'react'
import { Segment } from 'semantic-ui-react'

export const OuterSegment = props => 
  <Segment.Group raised>
    <Segment {...props}>
    </Segment>
  </Segment.Group>;


