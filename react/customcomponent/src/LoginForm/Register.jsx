import React from 'react';
import { formData } from './LoginData';
import './login.css';

function Register() {
  const registrationLabels = formData.registerform.labels;
  const registrationFields = formData.registerform.fields;

  return (
    <form className="form-box">
      <h2>Registration Form</h2>
      {registrationLabels.map((label, index) => (
        <div key={registrationFields[index]?.id || index} className="form-group">
          <label htmlFor={registrationFields[index]?.id}>{label}:</label>
          <input
            type={registrationFields[index]?.type}
            id={registrationFields[index]?.id}
            placeholder={registrationFields[index]?.placeholder}
            name={registrationFields[index]?.name}
          />
        </div>
      ))}
      <button type="submit" className="submit-btn" onclick="">Register</button>
    </form>
  );
}

export default Register;
