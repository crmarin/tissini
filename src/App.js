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
import PrivateRoute from "PrivateRoute";
import { USER_LOGOUT } from "constants/userConstants";
import { postlogin } from "actions/userActions";

const App = () => {

  useEffect(() => {

    if (localStorage.mobilephone) {
      store.dispatch(postlogin({mobilephone: localStorage.mobilephone}));
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
          {/* add redirect for first page */}
          <Redirect from="*" to="/auth" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
