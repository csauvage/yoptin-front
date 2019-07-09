import React from 'react';
import logo from '../../assets/logo.svg'
import sendgrid from '../../assets/sendgrid.svg'
import './App.sass'

const App = () => {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <span className={'App_Logo__slogan'}>Supercharge your marketing email.</span>
        <div className={'App__builtfor'}>
          Built for
          <img src={sendgrid} className="App_Logo--Sendgrid" alt="logo" />
        </div>

      <div className={'App__Availability'}>
        August 2019
      </div>
    </div>
  );
}

export default App