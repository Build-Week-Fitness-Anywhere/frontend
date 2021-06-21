import React, { useState } from 'react'

const initialFormValues = {
    name: "",
    date: "",
    time: "",
    duration: 0,
    instructor: "",
    type: "",
    intensity: "",
    location: ""    
}

const errorValues = {
    name: "",
    date: "",
    time: "",
    duration: "",
    instructor: "",
    type: "",
    intensity: "",
    location: ""    
}

const initialDisabled = true;

function AddClassForm() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(errorValues);
    const [disabled, setDisabled] = useState(initialDisabled);

    const handleChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        setFormValues({
            ...formValues,
            [name]: valueToUse,
          });
    }
      
    return (
        <div>
            <form id="add-class-form">
                <label>
                    Class Name
                    <input
                    type="text"
                    placeholder="Class Name"
                    value={formValues.name}
                    onChange={handleChange}
                    name="name"
                    ></input>
                </label>
                <label>
                    Date
                    <input
                    type="text"
                    placeholder="Day of Class"
                    value={formValues.date}
                    onChange={handleChange}
                    name="date"
                    ></input>
                </label>
                <label>
                    Time
                    <input
                    type="text"
                    placeholder="Time of Class"
                    value={formValues.time}
                    onChange={handleChange}
                    name="time"
                    ></input>
                </label>
                <label>
                    Duration
                    <input
                    type="text"
                    placeholder="Duration"
                    value={formValues.duration}
                    onChange={handleChange}
                    name="duration"
                    ></input>
                </label>
                <label>
                    Instructor
                    <input
                    type="text"
                    placeholder="Instructor"
                    value={formValues.instructor}
                    onChange={handleChange}
                    name="instructor"
                    ></input>
                </label>
                <label>
                    Type
                    <input
                    type="text"
                    placeholder="Type of Class"
                    value={formValues.type}
                    onChange={handleChange}
                    name="type"
                    ></input>
                </label>
                <label>
                    Intensity
                    <input
                    type="text"
                    placeholder="Intensity of Class"
                    value={formValues.intensity}
                    onChange={handleChange}
                    name="intensity"
                    ></input>
                </label>
                <label>
                    Location
                    <input
                    type="text"
                    placeholder="Where is the class?"
                    value={formValues.location}
                    onChange={handleChange}
                    name="location"
                    ></input>
                </label>
            </form>
        </div>
    )
}

export {
    AddClassForm
}