import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Nav } from "../../components/Nav";
import { OuterSegment, InnerSegment } from "../../components/Segment";


//create component and define initial state
export class DashPanel extends Component {


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
/*color= {job.color}*/
render() {
	return (
		this.props.results.length ? (
			<OuterSegment>
				<strong>{this.props.status}</strong>
				{this.props.results.map(job => (
					<InnerSegment 
                    key={job.jobid}
                    color={this.props.color}>
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
				
			