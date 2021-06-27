import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';



const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

