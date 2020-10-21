import React from 'react';
//import logo from './logo.svg';
import './App.css';
import x from 'john-package';
import y from './test.js';
//import Navbar from 'react-bootstrap/Navbar';
//import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar.js';




window.addEventListener('visibilitychange', () => {

if(document.hidden){

  console.log('Tab is Hidden');
}
else
{
  console.log('Tab is Focused');
}

})


x.greetings();
y.comment();
y.consola();
function App() {

  return (
   /*
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
    */
   <NavBar />
  );
}

export default App;
