import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Researchinfo from './Researchinfo';

const Profile = () => {
  const [lecturerDetails, setLecturerDetails] = useState({});
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();
  const [tk,setTk]=useState();

  useEffect(() => {
    const fetchLecturerDetails = async () => {
      try {
        const token = localStorage.getItem('authToken'); // my
        setTk(token);
        const response = await fetch('http://localhost:5000/fetchData', { // Adjust the endpoint as necessary
          method: 'GET',
          credentials: 'include', // Include cookies in the request
          headers: {
            'Authorization': `Bearer ${token}`,// my
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setLecturerDetails(data);
          setClasses(data.classes || []);
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
    <div>
      <Navbar />
      <div className='m-2 p-1'>
        {/* Basic Details Section */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Basic Details</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Name: {lecturerDetails.fullName}</p>
            <p>Email: {lecturerDetails.email}</p>
            <p>Employee ID: {lecturerDetails.EmpID}</p>
            <p>Department: {lecturerDetails.department}</p>
            <p>Joining Date: {lecturerDetails.JoiningDate}</p>
          </div>
        </div>

        {/* Qualification Section */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Qualification Details</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>UG: {lecturerDetails.UG}</p>
            <p>PG: {lecturerDetails.PG}</p>
            <p>PhD: {lecturerDetails.Phd}</p>
            <p>Year of Passing: {lecturerDetails.YearOfpass}</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Experience</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Industry Experience: {lecturerDetails.Industry} years</p>
            <p>Total Experience: {lecturerDetails.Total_Exp} years</p>
          </div>
        </div>

        {/* Update Button */}
        <div>
          <button
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              fontFamily: 'Arial, sans-serif',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
            onClick={() => navigate('/add-user')}
          >
            Update Details
          </button>
        </div>
        <Researchinfo lecturerId={lecturerDetails._id} token={tk}/>
      </div>
    </div>
  );
};

export default Profile;