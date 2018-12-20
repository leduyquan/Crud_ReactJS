import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../Layout';

const PrivateRoute = ({
  component: Component,
  ...options
}) => (
    <Route
      {...options}
      render={props  => (
        <Layout>
          <Component {...props } />
        </Layout>
      )}
    />
  );

PrivateRoute.propTypes = {
  component: PropTypes.any
};

export default PrivateRoute;