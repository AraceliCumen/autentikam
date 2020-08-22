import React from 'react';

import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import autentikam from './reducers'

import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/pages/Home';


let store = createStore(autentikam);

function App() {
  return (

    <Router>
      <div>
        <Route exact path="/autentikam/" render={(props) => <Home {...props} store={store} />} />
        {/* <Route path="/demo/login" render={(props) => <Login {...props} store={store} />} />
        <Route path="/demo/list" render={(props) => <List {...props} store={store} />} />
        <Route path="/demo/register" render={(props) => <Register {...props} store={store} />} /> */}
      </div>
    </Router>
  );
}

export default App;