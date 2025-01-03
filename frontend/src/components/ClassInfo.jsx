import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import './ClassInfo.css';
import DisplayClasses from './DisplayClasses'; // Component to display the list of classes
import { useNavigate } from 'react-router-dom';

const ClassInfo = ({ lecturerId, token }) => {
  const navigate = useNavigate();

  console.log("LecturerId at ClassInfo:", lecturerId);
  console.log("Token at ClassInfo:", token);

  return (
    <div className="class-container">
      <div className="header">
        <h1>My Classes</h1>
        <button 
          onClick={() => navigate('/class', { state: { token } })} 
          className="add-button"
        >
          <IoMdAdd /> Add
        </button>
      </div>
      <DisplayClasses token={token} />
    </div>
  );
};

export default ClassInfo;