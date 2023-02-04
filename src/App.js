import React from 'react';
import {About,Header,Work,Skills,Footer} from './container';
import { Navbar } from './components';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
