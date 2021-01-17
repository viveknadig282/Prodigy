import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import signin from './pages/signin';
import signup from './pages/signup';
import courses from './pages/courses';
import infopage from './pages/infopage';
import listing from './pages/listing';
import Rating from './pages/rating';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/signin" exact component={signin} />
        <Route path="/signup" exact component={signup} />
        <Route path="/courses" exact component={courses} />
        <Route path="/infopage" exact component={infopage} />
        <Route path="/listing" exact component={listing} />
        <Route path="/rating" exact component={Rating} />
      </Switch>
    </Router>
  );
}

export default App;
