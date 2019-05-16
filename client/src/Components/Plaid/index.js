import React, { Component } from 'react';
import PlaidLink from 'react-plaid-link';
import axios from "axios";
import history from "../../history";

class App extends Component {

 state = {

   publicKey: ''

 }

  getPublicKey = async function(){
    
    return await axios.get('api/users/getPublicKey')
    
  }

 componentDidMount(){
   this.getPublicKey()
    .then(res => {
      console.log('ARGGH', res.data)
      this.setState({ 
      publicKey: res.data.PLAID_PUBLIC_KEY
      })
    })
  }
 
  handleOnSuccess(token, metadata) {
    // send token to client server
    const user_id = sessionStorage.getItem('user_id')
    console.log("Client token = ", token);
    axios.request({
      method: "POST",
      url: "/api/users/get_access_token",
      data: {
        public_token: token,
        account_id: metadata.account_id,
        accounts: metadata.accounts
      }
    }).then((res) => {
      console.log("Plaid post success", res.data)
      axios.request({
        method:"POST",
        url:"/api/users/update/",
        data:{
          accounts: metadata.accounts,
          accessToken: res.data.access_token,
          user_id: user_id
        }
    })
    .then(res => {console.log('USER UPDATE SUCCESS', res.data)
      sessionStorage.setItem('existingUser', true)
      history.replace('/')
    })
    .catch((err) => { console.log("userID post failed", err) });

    // axios.request({
    //   method:"POST",
    //   url:"/api/user/updateUser",
    //   data:
    // }).then(res => {
    //   console.log("updateUser Route Success = ", res.data)
    //   history.replace('/masonry')
    // }).catch(err => { console.log("updateUser Route error", err) })
  })
}

  render() {
    console.log('THIS IS OUR PUBLIC KEY', this.state.publicKey)
    return (
      <PlaidLink
        key={null}
        clientName="PennyWise"
        env="sandbox"
        institution={null}
        publicKey= {this.state.publicKey}
        product={['auth', 'transactions']}
        apiVersion={'v2'}
        token={null}
        selectAccount={true} // deprecated – use https://dashboard.plaid.com/link
        webhook="https://webhooks.test.com"
        onEvent={this.handleOnEvent}
        onExit={this.handleOnExit}
        onLoad={this.handleOnLoad}
        onSuccess={this.handleOnSuccess}>
        Open Link and connect a bank account to Plaid
      </PlaidLink>
    )
  }
}

export default App;