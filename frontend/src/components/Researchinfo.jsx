import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import './Researchinfo.css';
import DisplayResearches from './DisplayResearches';
import { useNavigate } from 'react-router-dom';

const Researchinfo = ({ lecturerId, token }) => {
  const navigate = useNavigate();

  console.log("LecturerId at Researchinfo:", lecturerId);
  console.log("Token at Researchinfo:", token);

  return (
    <div className="research-container">
      <div className="header">
        <h1>My Researches</h1>
        <button 
          onClick={() => navigate('/addResearch', { state: { token } })} 
          className="add-button"
        >
          <IoMdAdd /> Add
        </button>
      </div>
      <DisplayResearches token={token} />
    </div>
  );
};

export default Researchinfo;
