import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import App from "./App";
import Callback from "./Callback/Callback";
import Auth from "./Auth/Auth";
import history from "./history";
import Plaid from "./Components/Plaid/index";
import Masonry from "./Components/WishListDash/Masonry";
import Transactions from "./Components/Transactions";

import WishList from "./Components/WishListDash/WishList";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  const loggedIn = sessionStorage.getItem('isLoggedIn');
  const existingUser = sessionStorage.getItem('existingUser');
  return (
    <Router history={history}>

      <div>
        <Route path="/" render={props =>
          !auth.isAuthenticated() ?
            <App auth={auth} {...props} /> :
            !existingUser ? <Plaid /> :
              <Masonry />
          }
        /> :

        <Route
          path="/transactions" render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
                <Transactions auth={auth} {...props} />
              )
          }
        />
        <Route
          path="/plaid"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
              <Plaid/>
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
