import React, { Component } from "react";
import { Button, Header, Image, Modal, Icon, Card } from 'semantic-ui-react'
import { ContactCard } from "./ContactCard";


export class ContactModal extends Component {
  state = {
  	contacts: [
                {
                  "_id": "1",
                  "name": "Cameron Manavian",
                  "title": "Creator of Cam's Jams",
                  "phone": "323.867.5309",
                  "email": "cam@camsjams.com",
                  "notes": "React-tionary"
                }, 
                { "_id": "2",
                  "name": "Cameron Manavian",
                  "title": "Creator of Cam's Jams",
                  "phone": "323.867.5309",
                  "email": "cam@camsjams.com",
                  "notes": "React-tionary"
                }
                ]

  };

 /* componentDidMount() {
  	this.loadContacts();
  }

  loadContacts = () => {
  	API.getContacts()
  		.then(res =>
  			this.setState({contacts: res.data})
  		)
  		.catch(err => console.log(err));
  };

  constructor(props) {
  	super(props);
  	this.handleAddContact = this.handleAddContact.bind(this);
  	this.state = {showContactCard: false};
  }

  handleAddContact = event => {
  	event.preventDefault();
    let contacts = this.state.contacts;
    contacts.push({});
  	this.setState({contacts});
  }*/

	render() {
		const showContactCard = this.state.showContactCard;
		return (

  	<Modal trigger={
      <Button 
        color='blue'
        content='Contacts'>
      </Button>} closeIcon>
    	<Modal.Header> 
    		<Icon name='users' /> 
    		 Contacts
    		<Button 
	    		content='Add New Contact' 
	    		icon='address card outline' 
	    		labelPosition='right'
	    		floated="right"
	    		onClick={this.handleAddContact}  
    		/>
    	</Modal.Header>
    	<Modal.Content>
	    	{this.state.contacts.length ? (	
		    	<Card.Group itemsPerRow={2}>
		    		{this.state.contacts.map(contact => (
		    			<ContactCard key={contact._id}
                name={contact.name}
                title={contact.title}
                phone={contact.phone}
                email={contact.email}
                notes={contact.notes}
               />
		    			))}
		    	</Card.Group>
		    	) : (
		    	<h3>No Results to Display</h3>
					)}
    	</Modal.Content>
  	</Modal>
  )};
};		



