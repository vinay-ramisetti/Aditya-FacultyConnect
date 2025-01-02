import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import './Researchinfo.css'; 
import DisplayResearches from './DisplayResearches';
import { useNavigate } from 'react-router-dom';

const Researchinfo = (props) => {
  const navigate = useNavigate();

  return (
    <div className="research-container">
      <div className="header">
        <h1>My Researches</h1>
        <button onClick={() => navigate('/addResearch', { state: { token: props.token } })} className="add-button">
          <IoMdAdd /> Add
        </button>
      </div>
      <DisplayResearches Id={props.lecturerId} />
    </div>
  );
};

export default Researchinfo;
