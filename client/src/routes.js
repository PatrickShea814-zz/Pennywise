import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import App from "./App";
import Callback from "./Callback/Callback";
import Auth from "./Auth/Auth";
import history from "./history";
import Plaid from "./Components/Plaid/index";
import Masonry from "./Components/WishListDash/Masonry";
import Transactions from "./Components/Transactions";
import Wrapper from "./Components/Wrapper/Wrapper"
import WishList from "./Components/WishListDash/WishList";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  const loggedIn = sessionStorage.getItem('isLoggedIn')
  return (
    <Router history={history}>
      
      <div>
          <Route path="/" render={props =>
          !auth.isAuthenticated() ?
          <App auth={auth} {...props} /> :
          <App auth={auth} {...props} />
        } 
          /> :

        <Route
          path="/transactions"
          render={props=>
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Transactions auth={auth} {...props} />
            )
          }
        />
        <Route
        path="/masonry"
        render={props =>
          !auth.isAuthenticated() ? (
            <Redirect to="/home" />
          ) : (
              <Masonry auth={auth} {...props} />
            )
        }
        />
        <Route
          path="/plaid"
          render={props =>
            !loggedIn || !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
                <Plaid auth={auth} {...props} />
              )
          }
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);

            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
