import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// components
import NavbarApp from './components/NavbarApp';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Recipy from './pages/Recipy';
import Contact from './pages/Contact';
import SingleMenu from './pages/SingleMenu';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <NavbarApp/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/recipy'>
          <Recipy/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/singlemenu/:id'>
          <SingleMenu/>
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
