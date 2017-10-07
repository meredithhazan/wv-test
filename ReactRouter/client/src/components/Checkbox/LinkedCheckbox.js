import React from "react";
import Semantic from "semantic-react";

export const LinkedCheckbox = ({ children }) =>
  <div className="cbContainer">
    <Checkbox/><a href="#"><label>{children}</label></a>
  </div>;
