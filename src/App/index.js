import React from 'react';
import Wrapper from '../common/Wrapper';
import PrivateRoute from '../common/PrivateRoute';
import { Route, Switch, Redirect } from 'react-router-dom';
import EmployeePage from '../views/containers/Employee';
import Alert  from '../common/Alerts';
import Modal from '../common/Modal';

class App extends React.Component {
  render() {
    const routesComponent = (
      <Wrapper>
        <PrivateRoute
          path="/dashboard"
          component={EmployeePage}
        />
      </Wrapper>
    );

    const routesApp = (
      <Switch>
        <Route exact path="/" render={() => (<h2> HomePage </h2>)} />
        {routesComponent}
      </Switch>
    )
   
    return (
      
      <Wrapper>
        {routesApp}
        <Alert />
        <Modal />
      </Wrapper>
    )
  }
}

export default App;