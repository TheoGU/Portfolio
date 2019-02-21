import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Project from './components/Project'
import Competence from './components/Competence'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import TimeLine from './components/TimeLine'


class App extends Component {
  render() {
    return (
      <div style={style.container}>
          <Header />
          <AboutMe />
          <Project />
          <Competence />
          <TimeLine />
          <Contact />
      </div>
    );
  }
}

export default App;

const style = {
  container: {
    margin:0,
    padding:0
  }
}
