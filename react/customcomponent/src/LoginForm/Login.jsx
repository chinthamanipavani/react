import React from 'react';
import { formData } from './LoginData';
import './login.css';

function Login() {
  const loginLabels = formData.loginForm.labels;
  const loginFields = formData.loginForm.fields;

  return (
    <form className="form-box">
      <h2>Login Form</h2>
      {loginLabels.map((label, index) => (
        <div key={loginFields[index]?.id || index} className="form-group">
          <label htmlFor={loginFields[index]?.id}>{label}:</label>
          <input
            type={loginFields[index]?.type}
            id={loginFields[index]?.id}
            placeholder={loginFields[index]?.placeholder}
            name={loginFields[index]?.name}
          />
        </div>
      ))}
      <button type="submit" className="submit-btn">Login</button>
      <br />
      <button type="submit" className="submit-btn">Register</button>

    </form>
  );
}

export default Login;
