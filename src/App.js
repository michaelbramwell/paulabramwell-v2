import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import Content from './components/Content/Content';
import ReactGA from 'react-ga';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-38810749-1');
  }

  render() {
    return (
      <>
        <MainMenu />
        <div id="bg"></div>
        <div id="base">
          <Header />
          <Content />
          <Footer />
        </div>
      </>
    )
  }
};

export default App;
