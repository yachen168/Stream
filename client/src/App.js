import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import StreamCreate from './views/StreamCreate';
import StreamDelete from './views/StreamDelete';
import StreamEdit from './views/StreamEdit';
import StreamShow from './views/StreamShow';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/show" component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
