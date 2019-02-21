import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Project from './components/Project'
import Competence from './components/Competence'


class App extends Component {
  render() {
    return (
      <div style={style.container}>
          <Header />
          <Project />
          <Competence />
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
