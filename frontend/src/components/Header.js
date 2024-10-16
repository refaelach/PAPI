import React from 'react';

const Header = () => {
  return (
    <header style={{backgroundColor: '#f0f0f0', padding: '1rem'}}>
      <h1>Welcome to PAPI</h1>
      <nav>
        <ul style={{listStyle: 'none', padding: 0}}>
          <li style={{display: 'inline', marginRight: '1rem'}}><a href="/">Home-devlopment-staging</a></li>
          <li style={{display: 'inline', marginRight: '1rem'}}><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;