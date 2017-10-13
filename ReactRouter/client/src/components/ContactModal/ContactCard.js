import React, { Component } from "react";
import { Card, Form, Button, Icon } from 'semantic-ui-react'
import API from "../../utils/API";
import { Link } from "react-router-dom";


export class ContactCard extends Component { 
  state = {
    name: "",
    title: "",
    phone: "",
    email: "",
    notes: ""
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
      API.createContact({
        name: this.state.name,
        title: this.state.title,
        phone: this.state.phone,
        email: this.state.email,
        notes: this.state.notes
      })
        .then(alert => "Got it!")
        .catch(err => console.log(err));
    }
  };

  componentWillMount() {
    this.setState({
        name: this.props.name,
        title: this.props.title,
        phone: this.props.phone,
        email: this.props.email,
        notes: this.props.notes
    });
  }
  deleteContact = id => {
    API.deleteContact(id)
      //.then(alert => )
      .catch(err => console.log(err));
  };

  render() {
    return (     
    <Card color='blue'>
    <Card.Content>
      <Form>
          <Form.Input 
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            placeholder="Name (required)"
          />
          <Form.Input 
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
            placeholder="Position"
          />
        <Form.Input 
            value={this.state.phone}
            name="phone"
            onChange={this.handleInputChange}
            placeholder="Phone"
        />
        <Form.Input 
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            placeholder="Email"
        />
        <Form.TextArea
            value={this.state.notes}
            onChange={this.handleInputChange}
            name="notes"
            placeholder="Additional notes about this contact..."
        />
        <Button.Group floated='right'>
        <Button 
          basic color='blue' 
          animated 
          size='small'
          disable={!(this.state.name)}
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
      </Form>
    </Card.Content>
  </Card>
  )};
};

