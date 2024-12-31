import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [designation, setDesignation] = useState('');
  const [department,setDepartment]= useState('');
  const [mobile, setMobile] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log({ fullname, email, year, designation, mobile });

    const formData=new FormData();
    formData.append('profileImage',profileImage);
    formData.append('fullname',fullname);
    formData.append('email',email);
    formData.append('year',year);
    formData.append('designation',designation);
    formData.append('mobile',mobile);
    formData.append('profileImage',profileImage);
    formData.append('department',department);
    try{
      const response=await axios.post("http://localhost:5000/signup/register",formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Successfully uploaded:",response.data);
    }
    catch(error){
      console.log("Error occurred:",error);
    }

  // const [formData, setFormData] = useState({
  //   fullname: '',
  //   email: '',
  //   password: '',
  //   designation: '',
  //   branch: '',
  // });

  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const validateForm = (data) => {
  //   const errors = {};
  //   if (!data.fullname) errors.fullname = 'Full Name is required';
  //   if (!data.email) errors.email = 'Email is required';
  //   if (!data.password) errors.password = 'Password is required';
  //   if (!data.designation) errors.designation = 'Designation is required';
  //   if (!data.branch) errors.branch = 'Branch is required';
  //   return errors;
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newErrors = validateForm(formData);
  //   if (Object.keys(newErrors).length === 0) {
  //     try {
  //       const response = await fetch('http://localhost:5000/signup/register', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(formData),
  //       });

        // if (!response.ok) {
        //   const errorData = await response.json();
        //   console.error('Server Error:', errorData);
        //   throw new Error('Network response was not ok');
        // }

    //     const data = await response.json();
    //     console.log('Success:', data);
    //     alert('Signup successful!');
    //   } catch (error) {
    //     console.error('Error:', error);
    //     alert('An error occurred. Please try again.');
    //   }
    // } else {
    //   setErrors(newErrors);
    // }
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
              style={inputStyle}
            >
              <option value="" disabled>
                Select your Designation
              </option>
              <option value="HOD">HOD</option>
              <option value="Professor">Professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="PHD">PHD</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>Department:</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              style={selectStyle}
              required
            >
              <option value="" disabled>
                Select your Department
              </option>
              <option value="CSE">Computer Science and Engineering</option>
              <option value="ECE">Electronics and Communication</option>
              <option value="EE">Electical Enginnering</option>
              <option value="MECH">Mechanical Engineering</option>
              <option value="CIVIL">Civil Engineering</option>
              <option value="CHE">Chemical Engineering</option>
              <option value="BIO">Bio Engineering</option>
            </select>
            {errors.designation && <span style={errorStyle}>{errors.designation}</span>}
          </div>

          <div>
            <label>Branch:</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Enter your Branch"
              style={inputStyle}
            />
            {errors.branch && <span style={errorStyle}>{errors.branch}</span>}
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
