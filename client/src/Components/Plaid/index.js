import React, { Component } from 'react';
import PlaidLink from 'react-plaid-link';
import "./style.css";
import axios from "axios";
import history from "../../history";



class App extends Component {

  state = {

    publicKey: ''
 
  }

 constructor(props){
   super(props)
   this.getPublicKey.bind(this)
 }

  getPublicKey = async function(){
    
    return await axios.get('api/users/getPublicKey')
    
  }
  
  componentDidMount = () =>{
   this.getPublicKey()
    .then(res => {
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
    .then(res => console.log('USER UPDATE SUCCESS', res.data))
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
    
    return (
      <div className="row justify-content-md-center">
        <PlaidLink
          key={null}
          clientName="PennyWise"
          env="sandbox"
          className="col col-md-12"
          style={
            {
              backgroundColor:"#24c2aa",
              padding:"14px 22px",
              marginBottom:"20px",
              marginTop:"4%",
              borderRadius:"4px",
              color:"#fff",
              fontWeight:"bold",
              boxShadow:"1px 1px 12px 8px #e6e6e6"
            }
          }
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
          OPEN LINK & CONNECT A BANK ACCOUNT TO PLAID
        </PlaidLink>
        </div>
    )
  }
}

export default App;