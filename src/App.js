import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({})
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/Velua/afddfb4c94ed7e3ed2bd66c28989674b/raw/')
      .then((response) => {
        this.setState({ 
          basics: response.data.basics,
          projects: response.data.projects
        });

      })
  }

  render() {
    console.log(this.state)
    const { basics, projects } = this.state

    if (basics == null) {
      return (
        <div>Loading..</div>
      )
    }

    return (
      <div className="wrapper">
        <Intro basics={basics} />
        <About />
    		<Work title="My Work" projects={this.state.projects} />
    		<Contact />
        <Footer text="Designed by John Williamson" />
      </div>
    );
  }
}

export default App;
