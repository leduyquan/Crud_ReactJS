import React from 'react';
import Wrapper from '../views/components/Wrapper';
import { Route, Switch, Redirect } from 'react-router-dom';
import Halo from '../views/components/halo'

class App extends React.Component {
  render() {
    const routes = (
      <Switch>
        <Route exact path="/" render={() => (<h2> HomePage </h2>)} />
        <Route path="/sa" component={Halo} />
      </Switch>
    )

    return (
      <Wrapper>
        {routes}
      </Wrapper>
    )
  }
}

export default App;