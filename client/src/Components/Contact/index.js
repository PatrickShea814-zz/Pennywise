import React, { Component } from 'react';
import { Form, Col, Button, Modal } from 'react-bootstrap';
import './style.css';



const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <Form className="col-md-8 mx-auto">
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
        <Form.Control htmlFor="email" placeholder='Email' />
        </Form.Group>
      
        <Form.Group controlId='formGridAddress1'>
          <Form.Label>Address</Form.Label>
          <Form.Control htmlFor="address" placeholder='1234 Main St' />
        </Form.Group>
      
        <Form.Row>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control htmlFor="city" placeholder='Enter City' />
          </Form.Group>
      
          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Control htmlFor="state" as='select'>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            </Form.Control>
          </Form.Group>
      
          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Zip</Form.Label>
            <Form.Control htmlFor="zip" placeholder='Enter State' />
          </Form.Group>
        </Form.Row>
      
        <Form.Group id='formGridCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
        Submit
        </Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl