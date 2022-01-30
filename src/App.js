import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App(props) {

  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <NavBar/>
      <Route path='/login' component={Login}/>
        <PrivateRoute exact path="/friends" comoponent={FriendsList} />
    </div>
  );
}

export default App;
