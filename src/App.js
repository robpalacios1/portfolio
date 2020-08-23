import React from 'react';
import './App.css';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'
import Content from './Content';
import Skills from './Skills'


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Skills />

    </div>
  );
}

export default App;
