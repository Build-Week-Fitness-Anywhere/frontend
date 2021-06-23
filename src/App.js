import React from 'react';
import './App.css';
import Register from './components/RegisterForm';
import Login from './components/LoginForm';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import AddClassForm from './components/AddClassForm';
import { EditClassForm } from './components/EditClassForm';
import InstructorDashboard from './components/InstructorDashboard';
import ClientDashboard from './components/clientDashboard';
import PrivateRoute from './utility/PrivateRoute'

function App() {
  return (
    <div className='App'>

    <Router>
      <Switch>
      <PrivateRoute path="/class/add" >
          <AddClassForm ></AddClassForm>
        </PrivateRoute>
        <PrivateRoute path="/class/edit" >
          <EditClassForm ></EditClassForm>
        </PrivateRoute>
        <PrivateRoute path='/client-dash'>
          <ClientDashboard></ClientDashboard>
        </PrivateRoute>
        <PrivateRoute path='/instructor-dash'>
          <InstructorDashboard></InstructorDashboard>
        </PrivateRoute>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
     
     </div>
  );
}

export default App;
