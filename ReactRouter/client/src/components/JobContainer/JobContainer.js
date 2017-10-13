import React, { Component } from "react";
import { InnerSegment, OuterSegment } from "../Segment";
import { SaveButtonAnimated } from "../Form";
import { Button, Form, Input, Label, Popup } from 'semantic-ui-react'
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { ContactModal } from "../ContactModal";
import { Calendar } from "../Calendar";

const typeOptions = [
	{
		text: 'permanent',
		value: 'permanent'
	},
	{
		text: 'contract',
		value: 'contract'
	},
	{
		text: 'contract to hire',
		value: 'contract to hire'
	}
]

const relocationOptions = [
	{
		text: 'Relocation Offered',
		value: "true"
	},
	{
		text: 'No Relocation Offered',
		value: 'false'
	}
]

const visaOptions = [
	{
		text: 'Visas Sponsored',
		value: 'true'
	},
	{
		text: 'No Visas Sponsored',
		value: 'false'
	}
]

export class JobContainer extends Component {

/*		handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};*/

	render() {
  		return (
  				<OuterSegment inverted color='blue' textAlign="left">
  					<strong>The Job</strong>
  				
  					<InnerSegment color='blue'>
  						<Form>
  							<Form.Group widths='equal'>
	  							<Form.Input
	  								value={this.props.position}
	  								onChange={this.handleInputChange}
	  								name='position'
	  								placeholder='Position (required)'
	  							/>
	  							<Form.Input
	  								value={this.props.url}
	  								onChange={this.handleInputChange}
	  								name='url'
	  								placeholder='Link to Job Listing'
	  							/>
	  						</Form.Group>
	  						<Form.Group widths='equal'>
	  							<Form.Field
	  								value={this.props.listDate}
	  								name='listDate'
	  								>
	  								<Popup
	  								trigger={<Button><Calendar /></Button>}
	  								content='Date job was listed'
	  								/>
	  							</Form.Field>
	  							<Form.Field
	  								value={this.props.closedDate}
	  								name='closedDate'
	  								>
	  								<Popup
	  								trigger={<Button><Calendar /></Button>}
	  								content='Deadline to apply'
	  								/>
	  							</Form.Field>
	  							<Form.Field
	  								value={this.props.appliedDate}
	  								name='appliedDate'
	  								>
	  								<Popup
	  								trigger={<Button><Calendar /></Button>}
	  								content='Date application submitted'
	  								/>
	  							</Form.Field>
	  						</Form.Group>
	  						<Form.Group widths='equal'>
	  							<Form.Select 
		  							value={this.props.type}
		  							placeholder="Select Job Type"
		  							options={typeOptions}
		  							onChange={this.handleInputChange}
		  							name='type'
	  							/>
	  							<ContactModal />	
	  						</Form.Group>
	  						<Form.Group widths='equal'>
	  							<Form.Input
	  								value={this.props.salary}
	  								onChange={this.handleInputChange}
	  								name='salary'
	  								placeholder='Annual Salary'
	  								icon='dollar'
	  								iconPosition='left'
	  							/>
	  							<Form.Input
	  								value={this.props.equity}
	  								onChange={this.handleInputChange}
	  								name='equity'
	  								placeholder='Equity'
	  								icon='percent'
	  								iconPosition='left'
	  							/>
	  							<Form.Input
	  								value={this.props.bonus}
	  								onChange={this.handleInputChange}
	  								name='bonus'
	  								placeholder='Bonus'
	  								icon='dollar'
	  								iconPosition='left'
	  							/>
	  						</Form.Group>
	  						<Form.Group widths='equal'>	
		  						<Form.Select
		  							value={this.props.offersRelocation} 
		  							placeholder="Offers Relocation?"
		  							options={relocationOptions}
		  							onChange={this.handleInputChange}
		  							name='offersRelocation'
		  						/>
		  						<Form.Select 
		  							value={this.props.visaSponsor}
		  							placeholder="Visas Sponsored?"
		  							options={visaOptions}
		  							onChange={this.handleInputChange}
		  							name='visaSponsor'
		  						/>
		  					</Form.Group>
	  						<SaveButtonAnimated	
									onClick={this.handleFormSubmit}
								/>
	  					</Form>
	  				</InnerSegment>
	  			</OuterSegment>
	  			)};
};
