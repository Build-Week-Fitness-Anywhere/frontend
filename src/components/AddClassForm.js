import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import schema from "../validation/ClassSchema";
import * as yup from "yup";
import { addClass } from '../actions/classActions'
import { connect } from 'react-redux';
import styled from 'styled-components'

const BackGround = styled.div`
    background-image: url(https://cdn.hipwallpaper.com/i/78/3/OWVH9P.jpg);
    background-repeat: no-repeat;
    background-size: 2200px 100vh;;
    
    
`

const FormGroup = styled.div`
	color: #D92344;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const Label = styled.label`
    size: 100px;
	margin-bottom: 0.5em;
	color: #F2F2F2;
    display: block;
`;


const Input = styled.input`
	padding: 0.5em;
	color: #F2F2F2;
	background: #405059;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
    &:hover {
        background-image: linear-gradient(to bottom, #F2F2F2, #BF213E);
`;
const Button = styled.button`
    display:inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: #F2F2F2;
    cursor:pointer;
    font-weight:500;
    width:150px;
    &:hover {
        background-image: linear-gradient(to bottom, #F2F2F2, #BF213E);
`

const initialFormValues = {
    name: "",
    date: "",
    time: "",
    duration: "0",
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

function AddClassForm(props) {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(errorValues);
    const [disabled, setDisabled] = useState(initialDisabled);
    const { push } = useHistory();

    const addClick = (evt) => {
        evt.preventDefault();
        props.addClass(formValues);
        push("/instructor-dash");
    }

    const checkSchema = (name, value) => {
        yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      }).catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
      schema.isValid(formValues).then((valid) => {
        setDisabled(!valid);
      });
    }

    const handleChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        setFormValues({
            ...formValues,
            [name]: valueToUse,
          });
        checkSchema(name, valueToUse);
    }
      
    return (
        <div>
          <BackGround>
            <form id="add-class-form">
              <FormGroup>
                {errorValues.name && <p>{errorValues.name}</p>}
                
                <Label>
                    Class Name
                    <Input
                    type="text"
                    placeholder="Class Name"
                    value={formValues.name}
                    onChange={handleChange}
                    name="name"
                    ></Input>
                </Label>
                </FormGroup>
                <FormGroup>
                {errorValues.date && <p>{errorValues.date}</p>}
                <Label>
                    Date
                    <Input
                    type="text"
                    placeholder="Day of Class"
                    value={formValues.date}
                    onChange={handleChange}
                    name="date"
                    ></Input>
                </Label>
                </FormGroup>
                <FormGroup>
                {errorValues.time && <p>{errorValues.time}</p>}
                <Label>
                    Time
                    <Input
                    type="text"
                    placeholder="Time of Class"
                    value={formValues.time}
                    onChange={handleChange}
                    name="time"
                    ></Input>
                </Label>
                </FormGroup>
                <FormGroup>
                {errorValues.duration && <p>{errorValues.duration}</p>}
                <Label>
                    Duration
                    <Input
                    type="text"
                    placeholder="Duration"
                    value={formValues.duration}
                    onChange={handleChange}
                    name="duration"
                    ></Input>
                </Label>
                </FormGroup>
                <FormGroup>
                {errorValues.instructor && <p>{errorValues.instructor}</p>}
                <Label>
                    Instructor
                    <Input
                    type="text"
                    placeholder="Instructor"
                    value={formValues.instructor}
                    onChange={handleChange}
                    name="instructor"
                    ></Input>
                </Label>
                </FormGroup>
                <FormGroup>
                {errorValues.type && <p>{errorValues.type}</p>}
                <Label>
                    Type
                    <Input
                    type="text"
                    placeholder="Type of Class"
                    value={formValues.type}
                    onChange={handleChange}
                    name="type"
                    ></Input>
                </Label>
                </FormGroup>
                <FormGroup>
                {errorValues.intensity && <p>{errorValues.intensity}</p>}
                <Label>
                    Intensity
                    <Input
                    type="text"
                    placeholder="Intensity of Class"
                    value={formValues.intensity}
                    onChange={handleChange}
                    name="intensity"
                    ></Input>
                </Label>
                </FormGroup>
                <FormGroup>
                {errorValues.location && <p>{errorValues.location}</p>}
                <Label>
                    Location
                    <Input
                    type="text"
                    placeholder="Where is the class?"
                    value={formValues.location}
                    onChange={handleChange}
                    name="location"
                    ></Input>
                </Label>
                </FormGroup>
                <FormGroup>
                <Button disabled={disabled} onClick={addClick} >Add Class</Button>
                </FormGroup>
            </form>
            </BackGround>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      ...state.class,
    };
  }
  
export default connect(mapStateToProps, { addClass })(AddClassForm)