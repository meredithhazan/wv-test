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
    dashboard:      [ 
                      {
                        "panelid": "100",
                        "status": "Apply",
                        "panelorder": 1,
                        "color": "green",
                        "results": [
                            {
                                "title": "CEO",
                                "jobid": 0,
                                "company": "Facebook",
                                },
                            {
                                "title": "CEO",
                                "jobid": 1,
                                "company": "Yahoo",
                                },
                            {
                                "title": "CEO",
                                "jobid": 2,
                                "company": "Twitter",
                                }
                        ]
                      },
                     
                    {
                        "panelid": "200",
                        "status": "InProgress",
                        "panelorder": 2,
                        "color": "yellow",
                        "results": [
                            {
                                "title": "President",
                                "jobid": 10,
                                "company": "Google"
                            },
                            {
                                "title": "VP",
                                "jobid": 11,
                                "company": "Facebook",
                            },
                            {
                                "title": "CTO",
                                "jobid": 12,
                                "company": "SnapChat",
                            }
                        ]
                    },
                    {
                        "panelid": "300",
                        "status": "Closed",
                        "panelorder": 3,
                        "color": "red",
                        "results": [
                            {
                                "title": "CEO",
                                "jobid": 0,
                                "company": "Facebook",
                                },
                            {
                                "title": "CEO",
                                "jobid": 1,
                                "company": "Yahoo",
                                },
                            {
                                "title": "CEO",
                                "jobid": 2,
                                "company": "Twitter",
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
              this.state.dashboard.map(panel => (
              <GridColumn>

                <DashPanel 
                key={panel.panelid}
                status={panel.status} 
                results={panel.results}
                panelorder={panel.order} 
                color={panel.color} />
              </GridColumn>
              ))
              
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
