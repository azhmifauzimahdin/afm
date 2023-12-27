import React from 'react';
import './App.css';
import { Sidebar } from './components/index';
import { Home } from './screens/index';

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <div style={{ height: "100vh" }}></div>
      </main >
    </>
  )
}

export default App
