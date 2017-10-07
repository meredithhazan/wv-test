import React from "react";
import "./DeleteBtn.css";
import { Icon } from 'semantic-ui-react'

const CloseWindow = () => (
  <div>
    <Icon link name='window close outline' />
  </div>
)

export default CloseWindow;

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
/*const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    ✗
  </span>
);

export default DeleteBtn;*/
