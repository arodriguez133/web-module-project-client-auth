import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <NavBar/>
      <Route to="/login" component={Login}/>
    </div>
  );
}

export default App;
