import { React, useState, useEffect } from "react";
import schema from "../validation/LogInSchema";
import * as yup from "yup";

const initialFormValues = {
  username: "",
  password: "",
};

const initialErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

export default function SignUp() {
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
      <button disabled={disabled}>Submit</button>
      <p>Don't have an account? Click here to Sign Up.</p>
    </form>
  );
}