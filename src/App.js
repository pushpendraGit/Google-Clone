import React from "react";

import "./App.css";
import Home from './pages/Home'
import {BrowserRouter as Router, Link, Switch , Route} from 'react-router-dom';
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <div className="app">
     <Router>

       <Switch>

       <Route path="/search">
       <SearchPage />
      
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
