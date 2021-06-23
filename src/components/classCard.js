import React from "react";
import "../styles/classCard.css";
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

function ClassCard(props) {
  const item = props.class;

  let { push } = useHistory()
  
  const deleteClassClick = () => {
    
  }

  const editClassClick = () => {
    push('/class/edit')
  }

  const joinClassClick = () => {

  }

  return (
    <div className="class-card">
      <p className="title">Class: {item.name}</p>
      <div className="row-1">
        <p>Instructor: {item.instructor}</p>
        <p>
          When: {item.date} {item.time}
        </p>
        <p>Where: {item.location}</p>
      </div>
      <div className="row-2">
        <p>Duration: {item.duration}</p>
        <p>Class Type: {item.type}</p>
        <p>Intensity: {item.intensity}</p>
      </div>
      <div className='row-3'>
      {props.role === 'instructor' && <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-3xl font-medium active:bg-red-500' onClick={editClassClick}>Edit Class</button> }
      {props.role === 'instructor' && <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-3xl font-medium active:bg-red-500' onClick={deleteClassClick}>Delete Class</button> }
      {props.role === 'client' && <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-3xl font-medium active:bg-red-500' onClick={joinClassClick}>Join Class</button> }
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
      ...state.user
  }
}

export default connect(mapStateToProps)(ClassCard)
