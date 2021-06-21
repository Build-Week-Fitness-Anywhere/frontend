import React, { useEffect } from "react";
import '../styles/instructorDash.css'
import ClassList from "./ClassList";

import { loadClass } from "../actions/classActions";
import { connect } from "react-redux";

function InstructorDashboard(props) {
  useEffect(() => {
    props.loadClass();
  }, []);

  return (
      
    <div className='classList'>
      <ClassList />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.class,
  };
}

export default connect(mapStateToProps, { loadClass })(InstructorDashboard);
