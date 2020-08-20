import React from "react";

import "./App.css";
import Home from './pages/Home'
import {BrowserRouter as Router, Link, Switch , Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
     <Router>

       <Switch>

       <Route path="/search">
         <h1>This is search</h1>
       </Route>

       

     <Route path="/">
     <Home />
     </Route>
     </Switch>

     </Router>
     
      {/* search page */}


    </div>
  );
}

export default App;
