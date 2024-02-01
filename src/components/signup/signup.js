import React, { useState, useEffect } from 'react';
import './signup.css'
import { Link } from 'react-router-dom';
import FormValidation from '../../utils/validators/form-validators';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    rePassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log('Form submitted successfully:', formData);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const regexValidators = {
    emailValidator: (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    phoneNoValidator: (phone) => {
      return /^[0-9]{10}$/.test(phone);
    },
    nameValidator:(name) => {
       return /^[a-zA-Z]+$/.test(name)
    }
  };

  const validate = (values) => {
    let errors = {};
   
    if (!values.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    else if(!regexValidators.nameValidator(values.firstName)){
      errors.firstName = 'Invalid name';
   
    }

    if (!values.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    else if(!regexValidators.nameValidator(values.lastName)){
      errors.firstName = 'Invalid name';
    }


    if (!values.email.trim()) {
      errors.email = 'Email is required';
    }
    else if (!regexValidators.emailValidator(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    else if (!regexValidators.phoneNoValidator(values.phone)) {
      errors.phone = 'Not a valid phone number';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!values.rePassword) {
      errors.rePassword = 'Please confirm password';
    } else if (values.rePassword !== values.password) {
      errors.rePassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="main-ft-contact" >
      <div className="main-contact">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
          <span
            style={{
              color: "red",
              fontSize: "0.8rem"
            }}
          >{errors.firstName}</span>

          <input placeholder="Last Name"
            type="text"
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange}
          ></input>
          <span
            style={{
              color: "red",
              fontSize: "0.8rem"
            }}
          > {errors.lastName}</span>

          <input placeholder="Email"
            name="email" 
            value={formData.email} 
            onChange={handleChange}
          ></input>
          <span
            style={{
              color: "red",
              fontSize: "0.8rem"
            }}
          > {errors.email}</span>


          <input placeholder="Phone no"
            type="tel" name="phone" 
            value={formData.phone} 
            onChange={handleChange}
          ></input>
          <span
            style={{
              color: "red",
              fontSize: "0.8rem"
            }}
          >{errors.phone}</span>

          <input placeholder="Password"
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange}
          ></input>
          <span
            style={{
              color: "red",
              fontSize: "0.8rem"
            }}
          >{errors.password}</span>

          <input placeholder="Re-Password"
            type="password" 
            name="rePassword" 
            value={formData.rePassword} 
            onChange={handleChange}
          ></input>
          <span
            style={{
              color: "red",
              fontSize: "0.8rem",
              marginTop:"100px"
            }}
          >{errors.rePassword}</span>
      
        <button type="submit" 
        className='signupbtn'>Sign Up</button>

        </form>
        
        <h1 style={{ textAlign: "center", color: "blue" }}>OR</h1>
        <Link to={'/login'} ><button>Login</button></Link>

      </div>
    </div>

    
  );
};

export default SignUpForm;
