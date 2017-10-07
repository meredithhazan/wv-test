import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { GridContainer, GridRow, GridColumn } from "../../components/Grid";
import { DashPanel } from "../../components/DashPanel";
import { MainContainer 
} from "../../components/Container";


//create component and define initial state
class Books extends Component {
   state = {
    dashboard:      ["panel": 
                      {
                        "panelid": "100",
                        "status": "Apply",
                        "panelorder": 1,
                        "results": [
                            {
                                "title": "CEO",
                                "jobid": 0,
                                "company": "Facebook",
                                }
                        ]
                      },
                    "panel": 
                    {
                        "panelid": "200",
                        "status": "InProgress",
                        "panelorder": 2,
                        "results": [
                            {
                                "title": "President",
                                "jobid": 1,
                                "company": "Google"
                            }
                        ]
                    }
                            ],

    company: "",
    title: "",
    status: "",
  };


// show this once the component has mounted
  // componentDidMount() {
  //  this.loadDashboard();
  // }


  // load jobs to show just company - title, distribute into 3 Dashboard components depending on status (applyList, inProgressList, closedList)
  /*loadDashboard = () => {
    API.getDash()
      .then(res =>
        this.setState({dashboard: res.data, company: "", title: "", status: "" })
      )
      .catch(err => console.log(err));  
  };*/

  // should there also be a deleteJobs option on each listing?

  



  render() {
    return (
      <MainContainer>
        <Nav />
        <GridContainer>
          <GridRow>
            {this.state.dashboard.length ? (
              <GridColumn>
              {this.state.dashboard.map(pnl => (
              
                <DashPanel /*key={pnl.panel.panelid}status={pnl.panel.status} results={pnl.panel.results} panelorder={pnl.panel.order} color={pnl.panel.color}*/ />
              
              ))}
              </GridColumn>
              ) : (
              <GridColumn>
                <h3>No Results to Display</h3>
              </GridColumn>
              )}
          </GridRow>
        </GridContainer>
      </MainContainer>
  )};
};
export default Books;
