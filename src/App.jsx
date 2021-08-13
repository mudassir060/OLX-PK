import React from 'react'
import './App.css';
import Home from './containers/Addproduct/index'
import AppRouter from './config/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/storage'

// import React,{ReactDOM} from 'react';

import './App.css';

import{connect} from 'react-redux';
import{set_data ,facebook_login } from './store/action';




function App() {
  return (
    <div className="App">
      <AppRouter/>
      </div>
  );
}

export default App;
