import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Grid } from 'semantic-ui-react'
import { CompanyContainer } from "../../components/CompanyContainer";
import {JobContainer } from "../../components/JobContainer";
import { StatusContainer } from "../../components/StatusContainer";
import { MainContainer 
} from "../../components/Container";
import { StageNav } from "../../components/StageNav";

class JobMain extends Component {
  state= {
    currentPanel: 'Application'
  };

  handlePanelChange = panel => {
    this.setState({currentPanel: panel});
  };

  renderPanel = () => {
    if (this.state.currentPanel === "Application") {
      return <ApplicationPanel />;
    } else if (this.state.currentPanel === "Interview") {
      return <InterviewPanel />;
    } else {
      return <FinalPanel />;
    }
  };


  render() {
    return (
      <MainContainer>
        <Nav />
        <Grid columns={2}>
          <Grid.Row stretched>
            <Grid.Column>
              <CompanyContainer />
              <JobContainer />
              <StatusContainer />   
            </Grid.Column>
            <Grid.Column>
              <StageNav 
                currentPanel={this.state.currentPanel}
                handlePanelChange={this.handlePanelChange}
              />
              {this.renderPanel()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>

  )};

};
export default JobMain;