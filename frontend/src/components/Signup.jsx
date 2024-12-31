import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobile, setMobile] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log({ fullname, email, year, designation, mobile });

    // const formData=new FormData();
    // formData.append('profileImage',profileImage);
    // formData.append('fullname',fullname);
    // formData.append('email',email);
    // formData.append('year',year);
    // formData.append('designation',designation);
    // formData.append('mobile',mobile);
    // formData.append('profileImage',profileImage);
    // try{
    //   const response=await axios.post("http://localhost:5000/upload/signup",formData,{
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   console.log("Successfully uploaded:",response.data);
    // }
    // catch(error){
    //   console.log("Error occurred:",error);
    // }

  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7fafc',
  };

  const formContainerStyle = {
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '2rem',
    width: '24rem',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3182ce',
    marginBottom: '1.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.375rem',
    outline: 'none',
    marginBottom: '1rem',
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#3182ce',
    color: 'white',
    borderRadius: '0.375rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2b6cb0',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>Complete Your Profile!</h1>
        <form onSubmit={handleSubmit}>
         
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>Full Name:</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter your Full Name"
              style={inputStyle}
              required
            />
          </div>
          
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              style={inputStyle}
              required
            />
          </div>
          
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>Year of Joining:</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year of Joining"
              style={inputStyle}
              required
            />
          </div>
         
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>Designation:</label>
            <select
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              style={selectStyle}
              required
            >
              <option value="" disabled>
                Select your Designation
              </option>
              <option value="Professor">Professor</option>
              <option value="Associate Professor">Associate Professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Lecturer">Lecturer</option>
            </select>
          </div>
          
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4a5568' }}>Contact Number:</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your Mobile Number"
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label>Profile Image:</label>
            <input
              type="file"
              onChange={(e) => setProfileImage(e.target.files[0])}
              style={inputStyle}
              required
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2b6cb0')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3182ce')}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
