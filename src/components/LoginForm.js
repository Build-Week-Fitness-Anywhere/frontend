import { React, useState, useEffect } from "react";
import schema from "../validation/LogInSchema";
import * as yup from "yup";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const BackGround = styled.div`
  background-image: url(https://www.gannett-cdn.com/presto/2020/11/19/USAT/f3d3d47e-1d51-4e2d-ae3c-39ce67a88d25-Dumbbells.png);
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
        width: 200px;
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

const Errors = styled.div `
    color: red;
`

const initialFormValues = {
  username: "",
  password: "",
};

const initialErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
            <h2>Login</h2>
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
            </FormGroup>
            <FormGroup>
              <label>
                Password
                <input
                  type="text"
                  placeholder="Enter Password"
                  value={formValues.username}
                  onChange={change}
                  name="username"
                ></input>
              </label>
            </FormGroup>
            <Buttons>
              <button disabled={disabled}>Submit</button>
            </Buttons>
          <p>Don't have an account? Click <Link to="/register">here</Link> to Sign Up.</p>
          </LoginContainer>
        </StyledForm>
      </MainContainer>
    </BackGround>
  );
}