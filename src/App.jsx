import React from 'react';
import './App.css';
import { Sidebar } from './components/index';
import { About, Home, Portfolio, Resume, Skill } from './screens/index';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 1000,
    offset: 260,
    once: true,
  });
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Skill />
        <Portfolio />
      </main >
    </>
  )
}

export default App
