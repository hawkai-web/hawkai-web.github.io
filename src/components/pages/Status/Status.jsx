import React from "react";
import logo from '../../../logo.svg';

export default function Home() {

    return(
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>HAWKAI</p>
        <p>Currently viewing StatusPage</p>
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          HomePage
        </a>
        <a
          className="App-link"
          href="/#/status"
          rel="noopener noreferrer"
        >
          StatusPage
        </a>
      </header>
    </div>
    )

}