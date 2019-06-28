import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import App from "./App";
import Callback from "./Callback/Callback";
import Auth from "./Auth/Auth";
import history from "./history";
import Plaid from "./Components/Plaid/index";
import Masonry from "./Components/WishListDash/Masonry";
import Transactions from "./Components/Transactions";
import DashMessage from "./Components/Content/DashMessage";
import Contact from "./Components/Contact";
import Wrapper from "./Components/Wrapper/Wrapper"
import WishList from "./Components/WishListDash/WishList";
import AboutUs from "./Components/AboutUs/AboutUs";

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
        />
        <Route
          path="/dashmessage"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
                <DashMessage auth={auth} {...props} />
              )
          }
        />
        <Route
          path="/transactions"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
                <Transactions auth={auth} {...props} />
              )
          }
        />
        <Route
          path="/masonry"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/" />
            ) : (
                <Masonry auth={auth} {...props} />
              )
          }
        />
        <Route
          path="/plaid"
          component={Plaid}
        />
        <Route
          path="/contact"
          component={Contact}
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
