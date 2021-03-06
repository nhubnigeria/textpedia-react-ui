import React, { Component } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div>
        <section className="bg shadow"></section>
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App;
