import React, { Component } from "react";
import { InnerSegment, OuterSegment } from "../Segment";
import { SaveButtonAnimated } from "../Form";
import { Form, Button, Icon } from 'semantic-ui-react'
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { ContactModal } from "../ContactModal";

export class CompanyContainer extends Component {
	state = { 
	 	name: "",
	 	address: "",
	 	city: "",
	 	state: "",
	 	zipcode: "",
	 	phone: "",
	 	website: ""

	};

	/*componentDidMount() {
		this.loadCompany();
	}

	loadCompany = id => {
		API.getEachJob(id)
			.then(res =>
				this.setState({job: res.data, 
					name: "",
	 				address: "",
	 				city: "",
	 				state: "",
	 				zipcode: "",
	 				phone: "",
	 				website: ""})
			)
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name) {
	    API.createJob({
	    	name: this.state.name,
	    	address: this.state.address,
	    	state: this.state.state,
	    	zipcode: this.state.zipcode,
	    	phone: this.state.phone,
	    	website: this.state.website
	    })
	    	.then(res => this.loadCompany(id))
	    	.catch(err => console.log(err));
  	}
  };*/

  	render() {
  		return (
  			<div>
  				<OuterSegment inverted color='blue' textAlign="left">
  				<strong>The Company</strong>
  				
  					<InnerSegment color='blue'>
  						<Form>
  							<Form.Input
  								value={this.state.name}
  								onChange={this.handleInputChange}
  								name="name"
  								placeholder="Name (required)"
  							/>	
  							<Form.Input
  								value={this.state.address}
  								onChange={this.handleInputChange}
  								name="address"
  								placeholder="Street Address"
  							/>
                <Form.Group widths='equal'>
  							<Form.Input
                  value={this.state.city}
                  onChange={this.handleInputChange}
                  name="city"
                  placeholder="City"
                />
                <Form.Input
  								value={this.state.state}
  								onChange={this.handleInputChange}
  								name="state"
  								placeholder="State"
  							/>
  							<Form.Input
  								value={this.state.zipcode}
  								onChange={this.handleInputChange}
  								name="zipcode"
  								placeholder="Zip Code"
  							/>
                </Form.Group>
                <Form.Group widths='equal'>
  							<Form.Input
  								value={this.state.phone}
  								onChange={this.handleInputChange}
  								name="phone"
  								placeholder="Main Phone Number"
  							/>
  							<ContactModal />
                </Form.Group>
  							<Form.Input
  								value={this.state.website}
  								onChange={this.handleInputChange}
  								name="website"
  								placeholder="Company Website"
  							/>
  							<Form.Button 
                  basic color='blue' 
                  animated
                  onClick={this.handleFormSubmit}>
                  <Button.Content visible>Save</Button.Content>
                  <Button.Content hidden>
                    <Icon name='checkmark' />
                  </Button.Content>
                </Form.Button>

  						</Form>
  					</InnerSegment>
  				</OuterSegment>	
  			</div>
  			)};
};