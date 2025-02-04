import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Profile.css';


const Profile = () => {
  const [lecturerDetails, setLecturerDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLecturerDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/fetchData', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setLecturerDetails(data);
        } else {
          console.error('Failed to fetch lecturer details');
        }
      } catch (error) {
        console.error('Error fetching lecturer details:', error);
      }
    };
    fetchLecturerDetails();
  }, []);

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-content">
        {/* General Information */}
        <section className="profile-section">
          <h2>General Information</h2>
          <p><strong>Name with Emp ID:</strong> {lecturerDetails.fullName} ({lecturerDetails.EmpID})</p>
          <p><strong>Designation & Department:</strong> {lecturerDetails.designation}, {lecturerDetails.department}</p>
          <p><strong>Date of Joining:</strong> {lecturerDetails.JoiningDate}</p>
          <p><strong>Emp Email:</strong> {lecturerDetails.email}</p>
        </section>

        {/* Academic Qualifications */}
        <section className="profile-section">
          <h2>Academic Qualifications</h2>
          <table>
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Month & Year of Passing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UG</td>
                <td>{lecturerDetails.UG}</td>
                <td>{lecturerDetails.UGYear}</td>
              </tr>
              <tr>
                <td>PG</td>
                <td>{lecturerDetails.PG}</td>
                <td>{lecturerDetails.PGYear}</td>
              </tr>
              <tr>
                <td>Ph.D. / Pursuing Ph.D</td>
                <td>{lecturerDetails.Phd || 'N/A'}</td>
                <td>{lecturerDetails.PhdYear || 'N/A'}</td>
              </tr>
              <tr>
                <td>Any Other</td>
                <td>{lecturerDetails.OtherInstitution || 'N/A'}</td>
                <td>{lecturerDetails.OtherYear || 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Experience */}
        <section className="profile-section">
          <h2>Experience</h2>
          <p><strong>Industrial Experience (if any):</strong> {lecturerDetails.Industry || 'N/A'}</p>
          <p><strong>Total Teaching Experience (after PG):</strong> {lecturerDetails.TExp} years</p>
          <p><strong>Date of Joining in Aditya:</strong> {lecturerDetails.JoiningDate}</p>
        </section>

        {/* Update Button */}
        <button className="update-button" onClick={() => navigate('/add-user')}>
          Update Details
        </button>
      </div>
    </div>
  );
};

export default Profile;
