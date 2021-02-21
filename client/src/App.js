import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Home from './views/Home';
import StreamCreate from './views/StreamCreate';
import StreamDelete from './views/StreamDelete';
import StreamEdit from './views/StreamEdit';
import StreamShow from './views/StreamShow';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
