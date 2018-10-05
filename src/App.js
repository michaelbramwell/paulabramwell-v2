import React from 'react';
import './App.scss';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import Content from './components/Content/Content';

const App = () => (
  <>
    <div id="bg"></div>
    <div id="base">
      <Header />
      <MainMenu />
      <Content />
      <Footer />
    </div>
  </>
);

export default App;
