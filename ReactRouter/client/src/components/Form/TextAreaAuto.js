/*import React from "react";

export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>;*/

//automatically adjusting box height
import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

export const TextAreaAuto = props => 
  <Form>
    <TextArea autoHeight placeholder={...props} style={{ minHeight: 100 }} />
  </Form>



