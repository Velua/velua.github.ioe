import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Intro />
        <About />
		<Work title="My Work" />
		<Contact />
      </div>
    );
  }
}

export default App;
