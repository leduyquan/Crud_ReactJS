import React from 'react';
import Wrapper from '../common/Wrapper';
import PrivateRoute from '../common/PrivateRoute';
import { Route, Switch, Redirect } from 'react-router-dom';
import EmployeePage from '../views/containers/Employee';
import AlertRedux from '../common/Alerts';

class App extends React.Component {
  render() {
    const routeEm = (
      <Wrapper>
        <PrivateRoute
          path="/dashboard"
          component={EmployeePage}
        />
      </Wrapper>
    );

    const routes = (
      <Switch>
        <Route exact path="/" render={() => (<h2> HomePage </h2>)} />
        {routeEm}
      </Switch>
    )

    return (
      <Wrapper>
        {routes}
        <AlertRedux />
      </Wrapper>
    )
  }
}

export default App;