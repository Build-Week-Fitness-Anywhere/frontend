import { React, useState, useEffect } from "react";
import schema from "../validation/SignUpSchema";
import * as yup from "yup";
import {Link} from 'react-router-dom'

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

export default function Register() {
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
    <form>
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
      <button disabled={disabled}>Submit</button>
      <p>Already have an account? Click <Link to='/'>here</Link> to Log In.</p>
    </form>
  );
}