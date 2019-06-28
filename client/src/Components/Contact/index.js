import React, { Component } from 'react';
import { Form, Col, Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import './style.css';
import axios from 'axios';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]
const AboutTitle = styled.h1`
    color: white;
    padding: 0 5%;
    font-size: 1.5em;
    margin: 0 0 20px 0;
    letter-spacing: 3px;
`;

class FormExampleSubcomponentControl extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();

    console.log('THIS IS OUR DATA', e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value)

    axios.post('/api/users/mail', {
      name: e.target[0].value + '' + e.target[1].value,
      email: e.target[2].value,
      topic: e.target[3].value
    }
    ).then(response => {
      console.log('HELLO', response)
    })

  }

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div className="contact-us">
        <AboutTitle>Contact Us<hr /></AboutTitle>
        <Form className="col-md-8 mx-auto" onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>First Name</Form.Label>
              <Form.Control htmlFor="firstName" type='text' placeholder='Enter First Name' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control htmlFor="lastName" type='text' placeholder='Enter Last Name' />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridAddress2'>
            <Form.Label>Email</Form.Label>
            <Form.Control htmlFor="email" placeholder='Enter Email Address' />
          </Form.Group>

          <Form.Group as={Col} htmlFor="inquiry" controlId='formGridState'>
            <Form.Label>Inquiry</Form.Label>
            <Form.Control htmlFor="Inquiry" as='select' placeholder='Topic of Inquiry'>
              <option value="ACCOUNT">Opening an Account</option>
              <option value="BUSINESS">Ecommerce Partnership Opportunities</option>
              <option value="OTHER">Other</option>
            </Form.Control>
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
        </Button>
        </Form>
      </div>
    )
  }
}

export default FormExampleSubcomponentControl