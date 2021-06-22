import React from "react";
import "../styles/classCard.css";

function ClassCard(props) {
  const item = props.class;
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
    </div>
  );
}

export { ClassCard };
