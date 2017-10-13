import React from 'react';
import { Tab } from 'semantic-ui-react';
import { ApplicationPanel, InterviewPanel, FinalPanel } from "./StepsContainer";

const panes = [
  { menuItem: 'Application', 
  	render: () => 
  		<Tab.Pane attached={false}>
  			<ApplicationPane />
  		</Tab.Pane> },
  { menuItem: 'Interview', 
  	render: () => 
  		<Tab.Pane attached={false}>
  			Tab 2 Content
  		</Tab.Pane> },
  { menuItem: 'Final', 
  	render: () => 
  		<Tab.Pane attached={false}>
  			Tab 3 Content
  		</Tab.Pane> }
]

export const StepsContainer = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

