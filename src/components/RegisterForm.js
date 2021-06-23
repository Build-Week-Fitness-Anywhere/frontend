import { React, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import schema from "../validation/SignUpSchema";
import * as yup from "yup";
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import { saveUser } from '../actions/userActions'

const BackGround = styled.div`
  background-image: url(https://i.pinimg.com/originals/c3/4e/24/c34e24f68f1c21a28e0ebd5382d444bc.jpg);
`

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

const StyledForm = styled.form`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
    width: 460px;
    display:block;
    position:relative;
    background-image: linear-gradient(to bottom right, #D92344, #F2A0AF);
`
const LoginContainer = styled.div`
    padding:30px;
    input, button {
        appearance: none;
        background: none;
        border: none;
        outline: none;
        width: 200px
    }
    h2 {
        color: black;
        font-size: 1.7rem;
        font-weight: 500;
        margin-bottom: 10%;
    }
    button {
        display:inline-block;
        padding: 10px 15px;
        border-radius: 8px;
        background-color: #F2F2F2;
        cursor:pointer;
        font-weight:700;
        width:100px;
        &:hover {
            background-image: linear-gradient(to bottom, #F2F2F2, #BF213E);
        }
    }
`
const FormGroup = styled.div`
    display:block;
    width: 200px;
    margin: auto auto;
    margin-bottom: 18%;
    label {
        display:block;
        color: black;
        font-size: 1rem;
        margin-bottom: 10%;
        transition: 0.4s;
    }
    &:focus-within label {
        color: white;
    } 
    input {
        display:block;
        padding: 10px 15px;
        background-color: #F8F8F8;
        border-radius: 8px;
        transition: 0.4s;
        &:focus {
            box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
        }
    }
`

const Buttons = styled.div`
  display:flex;
  justify-content:space-around;
`

const initialFormValues = {
  username: "",
  password: "",
  role: "",
};

const initialErrors = {
  username: "",
  password: "",
  role: "",
};

const initialDisabled = true;

function RegisterForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  let { push } = useHistory();

  const change = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    yup
      .reach(schema, name)
      .validate(valueToUse)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })

      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: valueToUse,
    });
  };

  const registerUser = (evt) => {
    evt.preventDefault();
    props.saveUser(formValues);
    push("/");
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <BackGround>
      <MainContainer>
        <StyledForm id='login-form'>
          <LoginContainer>
            <h2>Register</h2>
            <FormGroup>
              <label>
                Username
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={formValues.username}
                  onChange={change}
                  name="username"
                ></input>
              </label>
              <p>{errors.username}</p>
            </FormGroup>
            <FormGroup>
              <label>
                Password
                <input
                  type="text"
                  placeholder="Enter Password"
                  value={formValues.password}
                  onChange={change}
                  name="password"
                ></input>
              </label>
              {errors.password}
            </FormGroup>
            <FormGroup>
              <label>
                Role
                <select
                  type="select"
                  value={formValues.role}
                  onChange={change}
                  name="role"
                >
                  <option value="">Select Role</option>
                  <option value="client">Client</option>
                  <option value="instructor">Instructor</option>
                </select>
              </label>
              {errors.role}
              <button disabled={disabled} onClick={registerUser}>Submit</button>
              <p>Already have an account? Click <Link to='/'>here</Link> to Log In.</p>
            </FormGroup>
          </LoginContainer>
        </StyledForm>
      </MainContainer>
    </BackGround>
  );
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { saveUser })(RegisterForm);