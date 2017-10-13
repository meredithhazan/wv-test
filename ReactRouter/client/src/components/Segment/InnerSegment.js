import React from 'react'
import { Segment } from 'semantic-ui-react'

export const InnerSegment = props => 
	<Segment.Group>
      <Segment {...props} />
    </Segment.Group>;