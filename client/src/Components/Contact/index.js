import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './style.css';
import axios from 'axios';

const ContactUs = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin: 20% 0 0 0;
    font-size: 1.5em;
`;

const Submit = styled.button`
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    margin: 15px 2% 15px 1%;
    padding: 0.6rem 4rem;
    color: white;
    background-color: #00a79d;
    text-decoration: none;
    border-radius: 1rem;
    line-height: normal;
    border: none;
    -webkit-transition-duration: 0.6s; /* Safari */
    transition-duration: 0.6s;
    &:hover {
        background-color: #7AE0BB;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
        color: white;
    }
    &:active {
        background-color: #00a79d;
        transform: translateY(1px);
    }
`;

const Title = styled.h2`
    margin: 0 auto 2% auto;
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
      <ContactUs>
        <Form className="col-12 mx-auto" onSubmit={this.handleSubmit}>
          <Title>Get in touch with Pennywise.</Title>
          <Form.Row>
            <Col>
              <Form.Group controlId='formGridEmail'>
                <Form.Label>First Name:</Form.Label>
                <Form.Control className="formInput" htmlFor="firstName" type='text' placeholder='Enter First Name' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formGridPassword'>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control className="formInput" htmlFor="lastName" type='text' placeholder='Enter Last Name' />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId='formGridAddress2'>
                <Form.Label>Email:</Form.Label>
                <Form.Control className="formInput" htmlFor="email" placeholder='Enter Email Address' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group htmlFor="inquiry" controlId='formGridState'>
                <Form.Label>Inquiry:</Form.Label>
                <Form.Control className="formInput" htmlFor="Inquiry" as='select' placeholder='Topic of Inquiry'>
                  <option value="ACCOUNT">Opening an Account</option>
                  <option value="BUSINESS">Ecommerce Partnership Opportunities</option>
                  <option value="OTHER">Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Submit type='submit'>
            Submit
            </Submit>
        </Form>
      </ContactUs>
    )
  }
}

export default FormExampleSubcomponentControl