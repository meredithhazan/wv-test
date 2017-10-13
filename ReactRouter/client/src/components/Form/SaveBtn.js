import React from "react";
import { Button, Icon, Form} from 'semantic-ui-react'

export const SaveButtonAnimated = props => 
    <Form.Button {...props} basic color='blue' animated>
      <Button.Content visible>Save</Button.Content>
      <Button.Content hidden>
        <Icon name='checkmark' />
      </Button.Content>
    </Form.Button>;

