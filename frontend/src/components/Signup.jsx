import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    designation: '',
    department: '',
   
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.fullname) errors.fullname = 'Full Name is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.password) errors.password = 'Password is required';
    if (!data.designation) errors.designation = 'Designation is required';
    if (!data.department) errors.department = 'Department is required';
   
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Debugging
  
    const newErrors = validateForm(formData); // Just for finding the errors
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/signup/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          console.error("Response Status:", response.status);
          console.error("Response Message:", await response.text());
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        localStorage.setItem('authToken', data.token);
        alert('Signup successful!');
        console.log('Success:', data);
        
      //   fetch('http://localhost:5000/protectedroute/some-protected-route', {
      //     method: 'GET',
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': `Bearer ${data.token}`
      //     }
      // })
      // .then(response => response.json())
      // .then(data => {
      //     console.log('Response:', data);
      // })
      // .catch(error => {
      //     console.error('Error:', error);
      // });

        navigate('/home');
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      setErrors(newErrors);
      alert("Please fill out all required fields.");
    }
    // Removing the data 
    setFormData({
      fullname: '',
      email: '',
      password: '',
      designation: '',
      department: '',
     
    });
  };
  

  // Styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const formContainerStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const selectStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '0.8rem',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>Complete Your Profile!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Enter your Full Name"
              style={inputStyle}
            />
            {errors.fullname && <span style={errorStyle}>{errors.fullname}</span>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              style={inputStyle}
            />
            {errors.email && <span style={errorStyle}>{errors.email}</span>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              style={inputStyle}
            />
            {errors.password && <span style={errorStyle}>{errors.password}</span>}
          </div>

          <div>
            <label>Designation:</label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="" disabled>
                Select your Designation
              </option>
              <option value="Principal">Principal</option>
              <option value="HOD">HOD</option>
              <option value="Professor">Professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="PHD">PHD</option>
            </select>
            {errors.designation && <span style={errorStyle}>{errors.designation}</span>}
          </div>

          <div>
            <label>Department:</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="" disabled>
                Select your Department
              </option>
              <option value="CSE">Computer Science and Engineering</option>
              <option value="ECE">Electronics and Communication</option>
              <option value="EE">Electrical Engineering</option>
              <option value="MECH">Mechanical Engineering</option>
              <option value="CIVIL">Civil Engineering</option>
              <option value="CHE">Chemical Engineering</option>
              <option value="BIO">Bio Engineering</option>
            </select>
            {errors.department && <span style={errorStyle}>{errors.department}</span>}
          </div>

       

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
