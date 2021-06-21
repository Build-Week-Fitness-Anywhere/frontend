import React from 'react'

function ClassCard(props) {
    const item = props.class;
    return (
        <div className="class-card">
            <p>-</p>
            <p>Class: {item.name}</p>
            <p>Instructor: {item.instructor}</p>
            <p>When: {item.date} {item.time}</p>
            <p>Where: {item.location}</p>
            <p>Duration: {item.duration}</p>
            <p>Class Type: {item.type}</p>
            <p>Intensity: {item.intensity}</p>   
        </div>
    )
}

export {
    ClassCard
}