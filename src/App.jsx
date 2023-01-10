import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <section className="cards-list">
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </div>
  );
}

export default App;
