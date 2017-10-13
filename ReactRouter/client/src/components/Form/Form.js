import React from 'react'
import { Form } from 'semantic-ui-react'

export const FormSkeleton = ({children}) => 
  <Form>
    <Form.Field>
      {children}
    </Form.Field>
  </Form>;