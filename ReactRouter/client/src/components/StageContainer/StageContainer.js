import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { OuterSegment, InnerSegment } from "../../components/Segment";

export const StageContainer = props =>
	<OuterSegment inverted color={this.props.status.color}>
		<InnerSegment 
		key={job._id} 
		color='blue' raised textAlign="center">
			<h3 className={this.props.applicationStatus}>Stage: {this.props.applicationStatus}</h3> 
		</InnerSegment>
	</OuterSegment>