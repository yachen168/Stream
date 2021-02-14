import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './components/streams/Create';
import StreamDelete from './components/streams/Delete';
import StreamEdit from './components/streams/Edit';
import StreamList from './components/streams/List';
import StreamShow from './components/streams/Create';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/show" component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
