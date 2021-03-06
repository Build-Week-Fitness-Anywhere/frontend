import React, { useState } from 'react'
import schema from "../validation/ClassSchema";
import * as yup from "yup";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editClass } from '../actions/classActions';

const BackGround = styled.div`
    background-image: url(https://i.pinimg.com/originals/96/6a/7b/966a7b0fa51a0e145aa6b2fe8cd56923.jpg);
    background-repeat: no-repeat;
    background-size: 2200px 100vh;
    
    
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
	color: #f2f2f2;
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
    }
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
    }
`

/* const initialFormValues = {
    name: "Miyagi-Do Karate",
    date: "today",
    time: "sometime",
    duration: 60,
    instructor: "Daniel Larouso",
    type: "karate",
    intensity: "moderate",
    location: "Miyagi Dojo"    

} */

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

function EditClassForm(props) {
    const currentClass = props.class.classList.filter((item) => {
      return (item.class_id === props.class.currentClass);
    });
    const [formValues, setFormValues] = useState(currentClass[0]);
    const [errors, setErrors] = useState(errorValues);
    const [disabled, setDisabled] = useState(initialDisabled);
    let { push } = useHistory()

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

    const submit = (e) => {
      e.preventDefault();
      setFormValues({...formValues, class_id: props.class.currentClass})
      props.editClass(formValues);
      push("/dashboard");
    }

    return (
        <div>
          <BackGround>
            <form id="edit-class-form" >
              <FormGroup>
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
                <Label>
                    Date and Time
                    <Input
                      type="text"
                      placeholder="Day and Time of class"
                      value={formValues.start_time}
                      onChange={handleChange}
                      name="start_time"
                    ></Input>
              </Label>
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
              <Label>
                    Intensity
                    <Input
                      type="text"
                      placeholder="Intensity of Class"
                      value={formValues.level}
                      onChange={handleChange}
                      name="level"
                    ></Input>
              </Label>
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
              <Button disabled={disabled} onClick={submit}>Edit Class</Button>
              </FormGroup>
            </form>
    </BackGround>        
    </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { editClass } )(EditClassForm)