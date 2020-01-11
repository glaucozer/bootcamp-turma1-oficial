import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Login from './pages/Login'

function App() {
  return (
    <div >
      <Login/>
      <Button color="primary">primary</Button>
    </div>
  );
}

export default App;
