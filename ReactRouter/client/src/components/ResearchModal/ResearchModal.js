import React, { Component } from "react";
import { Button, Modal, Icon, Checkbox, Form, TextArea } from 'semantic-ui-react';

export class ResearchModal extends Component {
	
	state = {
		jobId: "",
		userId: "",
		research: ""
	};

	componentWillMount() {
		this.loadJob();
	}

	loadJob = id => {
		API.getEachJob(id)
			.then(res =>
				this.setState({job: res.data,
					research: ""}))
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
  	if (this.state.research) {
  		API.updateJob({
  			research: this.state.research
  		})
  			.then(res => this.loadJob(this.id))
  			.catch(err => console.log(err));
  	}
  };

	render() {
		return (
			<Modal trigger={
				<Checkbox
					label='Research Company'>
				</Checkbox>}
				closeIcon>
			<Modal.Header>
				<Icon name='building outline' />
				Company Research
			</Modal.Header>
			<Modal.Content>
				<p>One of the most difficult professional situations an individual can face is taking a position with a company, only to find out that its work environment, financial stability, opportunities and overall business practices do not live up to expectations. <br/> That's why one of the most important components of any job search is doing a background check on a company to ensure it is where you can build a successful career.</p>
				<p>There is a lot of information you should find out about a company before pursuing – or accepting – a position, from learning about its overall financial health and growth strategies to business philosophies and industry reputation.</p>
				<p>Take a deep dive into the company's website, conduct a thorough news search, and check out third party resources like <a href='http://www.vault.com/'>Vault.com</a> and save any relevant findings below.</p>
				<Form>
    			<TextArea autoHeight 
    				placeholder="Here's what I learned..." style={{ minHeight: 300 }} />
  			</Form>
  			<Button.Group floated='right'>
        <Button 
          basic color='blue' 
          animated 
          size='small'
          onClick={this.handleFormSubmit}
        >
        <Button.Content visible>Save</Button.Content>
        <Button.Content hidden>
            <Icon name='checkmark' />
        </Button.Content>
        </Button>
        <Button.Or />
        <Button 
          size='small'
          icon='remove user'
          color='blue'
          onClick={() => this.deleteContact(this.state._id)}
        />
        </Button.Group>





		)}
}