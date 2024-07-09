import React from 'react';
import Header from './components/Header'
import './App.css';

const App: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },

  ]
  return (
    <div className="App">
      <Header logo="WS" navItems={navItems}/>
    </div>
  );
}

export default App;
