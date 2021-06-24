import React from 'react';
import './App.css';
import Register from './components/RegisterForm';
import Login from './components/LoginForm';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import AddClassForm from './components/AddClassForm';
import  EditClassForm  from './components/EditClassForm';
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
        <PrivateRoute path='/dashboard'>
          <ClientDashboard></ClientDashboard>
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
