import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Courses from './pages/courses';
import Infopage from './pages/infopage';
import Listing from './pages/listing';
import Rating from './pages/rating';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: null
    }
  }

  setUser = id => {
    console.log("setting user")
    this.setState({
      userid: id
    })
  }

  getUser = () => {
    console.log("getting user")
    return this.state.userid;
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact render={ (props) => <About {...props} setUser={this.setUser} getUser={this.getUser}/> }/>
          <Route path="/signin" exact render={ (props) => <Signin {...props} setUser={this.setUser} getUser={this.getUser}/> }/>
          <Route path="/signup" exact render={ (props) => <Signup {...props} setUser={this.setUser} getUser={this.getUser}/> }/>
          <Route path="/courses" exact render={ (props) => <Courses {...props} setUser={this.setUser} getUser={this.getUser}/> }/>
          <Route path="/courses/:id" exact render={ (props) => <Infopage {...props} setUser={this.setUser} getUser={this.getUser}/> }/>
          <Route path="/listing" exact render={ (props) => <Listing {...props} setUser={this.setUser} getUser={this.getUser}/> }/>
          <Route path="/rating" exact render={ (props) => <Rating {...props} setUser={this.setUser} getUser={this.getUser}/> }/>
        </Switch>
      </Router>
    );
  }
}

export default App;
