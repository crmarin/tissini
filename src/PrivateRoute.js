import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {

  const { login } = useSelector((state) => state.userLogin);

  return (
    <Route
      {...rest}
      render={props =>
        !login
          ?
          (<Redirect to='/auth/login' />)
          :
          (<Component {...props} />)}
    />
  )
};

export default PrivateRoute;
