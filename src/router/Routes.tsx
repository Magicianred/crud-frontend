import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Tasks from '../pages/Tasks/index';
import Error from '../pages/Error/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tarefas" exact component={Tasks} />
      <Error />
    </Switch>
  )
}

export default Routes;