import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';
function App() {
  const dataElements = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <div className="container">
        <Header />
        <section className="cards-list">{dataElements}</section>
      </div>
    </div>
  );
}

export default App;
