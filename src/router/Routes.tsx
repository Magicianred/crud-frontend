import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Tasks from '../pages/Tasks/index';
import TaskForm from '../pages/TaskForm/index';
import TaskDetails from '../pages/TaskDetails/index';
import Error from '../pages/Error/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tarefas" exact component={Tasks} />
      <Route path="/cadastro" exact component={TaskForm} />
      <Route path="/cadastro/:id" exact component={TaskForm} />
      <Route path="/detalhes/:id" exact component={TaskDetails} />
      <Error />
    </Switch>
  )
}

export default Routes;