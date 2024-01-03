import React from 'react';
import './App.css';
import { Sidebar } from './components/index';
import { About, Home } from './screens/index';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 1000,
    offset: 260,
    once: false,
  });
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
      </main >
    </>
  )
}

export default App
