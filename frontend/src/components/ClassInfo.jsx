import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import './ClassInfo.css';
import DisplayClasses from './DisplayClasses'; // Component to display the list of classes
import { useNavigate } from 'react-router-dom';

const ClassInfo = () => {
  const navigate = useNavigate();


  return (
    <div className="class-container">
      <div className="header">
        <h1>My Classes</h1>
        <button 
          onClick={() => navigate('/class')} 
          className="add-button"
        >
          <IoMdAdd /> Add
        </button>
      </div>
      <DisplayClasses  />
    </div>
  );
};

export default ClassInfo;