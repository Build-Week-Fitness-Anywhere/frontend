import React from 'react';
import './App.css';
import Register from './components/RegisterForm';
import Login from './components/LoginForm';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import InstructorDashboard from './components/InstructorDashboard';

function App() {
  return (
    <div className='App'>

      <Switch>
        <Route path='/instructor-dash'>
          <InstructorDashboard></InstructorDashboard>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/">
          <Login></Login>
        </Route>
      </Switch>
     
     </div>
  );
}

export default App;
