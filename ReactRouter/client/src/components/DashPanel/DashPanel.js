import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Nav } from "../../components/Nav";
import { OuterSegment, InnerSegment } from "../../components/Segment";


//create component and define initial state
export class DashPanel extends Component {
	state = {
    	dashboard: ["panel": 
            {			"panelid": "100",
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
                    "panel": {
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
    status: ""
  };

// show this once the component has mounted
/*componentDidMount() {
	this.loadJobs();
}


// load jobs to show just company - title, distribute into 3 Dashboard components depending on status (applyList, inProgressList, closedList)
loadJobs = () => {
	API.getDash()
		.then(res =>
			this.setState({jobs: res.data, company: "", title: "", status: "" })
		)
		.catch(err => console.log(err));	
};

getStatus = () => {

}

// should there also be a deleteJobs option on each listing?



};*/

render() {
	return (
		this.state.dashboard.length ? (
			<OuterSegment>
				<strong>{this.state.panel.status}</strong>
				{this.state.results.map(job => (
					<InnerSegment key={job.jobid} /*style={"color:" + job.color}*/>
						<Link to={"/jobs/" + job.jobid}>
							<strong>
								{job.company}</strong> 
									- {job.title}
						</Link>
					</InnerSegment>
				))}
			</OuterSegment>
				) : (
					<h3>No Results to Display</h3>
				)
	)
};
};		
				
			