import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import {Api} from '@cennznet/api'
import './Popup.css';

const Popup = () => {
  React.useEffect(()=>{
    console.log('XXX: starting api...');
    Api.create({provider: 'wss://nikau.centrality.me/public/ws'}).then(api => console.log('XXX: created api', api)).catch((e)=>console.log('XXX: error', e))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
