import React from 'react';
import logo from './logo.svg';
import './App.css';

import {PublicClientApplication} from '@azure/msal-browser';

const application = new PublicClientApplication({
  auth: {
    clientId: 'sdtgdfsd',
  }
});

const account = {
  homeAccountId: '34554675474',
    environment: '34634654365',
    tenantId: '3453453454',
    username: 'someuser',
};

function App() {
  React.useEffect(() => {
    application.acquireTokenSilent({
      account,
      scopes: ['openid']
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
