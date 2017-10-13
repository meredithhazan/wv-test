import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
 
export class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Date: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      Date: date
    });
  }
 
  render() {
    return <DatePicker 
      selected={this.state.Date}
      onChange={this.handleChange }
      placeholderText="Select a date"
    />
  }
}
