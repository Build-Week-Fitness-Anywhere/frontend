import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import '../styles/instructorDash.css'
import ClassList from "./ClassList";

import { loadClass } from "../actions/classActions";
import { loadUser } from "../actions/userActions";
import { connect } from "react-redux";

function InstructorDashboard(props) {
  useEffect(() => {
    props.loadClass();
    props.loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      
    <div id="instructor-dashboard" className='classList'>
      <h2>{props && props.username}</h2>
      <ClassList />
      <Link to="/class/add" className="btn btn-primary" >Add Class</Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.user,
    ...state.class,
  };
}

export default connect(mapStateToProps, { loadClass, loadUser })(InstructorDashboard);
