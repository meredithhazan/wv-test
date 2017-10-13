import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { ApplicationPanel, InterviewPanel, FinalPanel } from "./StepsContainer";

export const StageNav = props =>
  <div>
    <Menu pointing>
      <Menu.Item 
        name='Application' 
        active={props.currentPanel === 'Application' ? 'active' : ""}
        onClick={() => props.handlePanelChange('Application')} 
      />

      <Menu.Item 
        name='Interview' 
        active={props.currentPanel === 'Interview' ? 'active' : ""} 
        onClick={() => props.handlePanelChange('Interview')} 
      />

      <Menu.Item 
        name='Final' 
        active={props.currentPanel === 'Final'}
        onClick={() => props.handlePanelChange('Final')} 
      />
    </Menu>
  </div>
      
    
  
