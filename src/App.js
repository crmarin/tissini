import React, { useEffect } from "react";
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Auth from "layouts/Auth.js";

// views without layouts
import Index from "views/Index.js";
import Catalogo from "views/Catalogo.js";
import Carro from "views/Carro.js";
import PrivateRoute from "PrivateRoute";
import { USER_LOGOUT,USER_LOGIN_SUCCESS } from "constants/userConstants";

const App = () => {

  useEffect(() => {

    if (localStorage.customer) {
      if(!localStorage.cart ){
        localStorage.cart = '{}'
      }

      store.dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {customer: JSON.parse(localStorage.customer), categories: JSON.parse(localStorage.categories), cart: JSON.parse(localStorage.cart)}
      });
    }

    window.addEventListener('storage', () => {
      if (!localStorage.customer) store.dispatch({ type: USER_LOGOUT });
      window.location.href = '/';
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/auth" component={Auth} />
          {/* add routes without layouts */}
          <PrivateRoute path="/" exact component={Index} />
          <PrivateRoute path="/catalogo/:id" exact component={Catalogo} />
          <PrivateRoute path="/carro" exact component={Carro} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/auth" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
