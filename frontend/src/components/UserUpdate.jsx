import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserUpdate.css';

function AddUserForm() {
  const [formData, setFormData] = useState({
    email: '',
    EmpID: '',
    JoiningDate: '',
    Qualification: '',
    YearOfpass: '',
    UG: '',
    PG: '',
    Phd: '',
    Industry: '',
    TExp: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/add-user', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User updated successfully');
        setFormData({
          email: '',
          EmpID: '',
          JoiningDate: '',
          Qualification: '',
          YearOfpass: '',
          UG: '',
          PG: '',
          Phd: '',
          Industry: '',
          TExp: '',
        });
        navigate('/profile');
      } else {
        alert('Failed to update user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while updating the user');
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="EmpID">Employee ID:</label>
        <input type="text" id="EmpID" name="EmpID" value={formData.EmpID} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="JoiningDate">Joining Date:</label>
        <input type="date" id="JoiningDate" name="JoiningDate" value={formData.JoiningDate} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="Qualification">Qualification:</label>
        <input type="text" id="Qualification" name="Qualification" value={formData.Qualification} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="YearOfpass">Year of Passing:</label>
        <input type="text" id="YearOfpass" name="YearOfpass" value={formData.YearOfpass} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="UG">Undergraduate:</label>
        <input type="text" id="UG" name="UG" value={formData.UG} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="PG">Postgraduate:</label>
        <input type="text" id="PG" name="PG" value={formData.PG} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="Phd">PhD:</label>
        <input type="text" id="Phd" name="Phd" value={formData.Phd} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="Industry">Industry:</label>
        <input type="text" id="Industry" name="Industry" value={formData.Industry} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="TExp">Total Experience:</label>
        <input type="number" id="TExp" name="TExp" value={formData.TExp} onChange={handleChange} />
      </div>

      <button className="submit-button" type="submit">Update User</button>
    </form>
  );
}

export default AddUserForm;