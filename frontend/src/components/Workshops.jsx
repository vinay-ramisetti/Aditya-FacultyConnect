import React from 'react';
import DisplayWorkshops from './DisplayWorkshops';
import { useNavigate } from 'react-router-dom';
import './Workshop.css';
import { FaPlus } from "react-icons/fa";
import Navbar from './Navbar';

const Workshops = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
       <div className="articles-container">
    <div className="header">
      <h1 className="page-title">Workshops</h1>
      <button
        className="post-button"
        onClick={() => navigate('/addworkshop')}
      >
      <FaPlus />  Add
      </button>
    </div>
    <hr className="divider" />
    <DisplayWorkshops />
  </div>
  </div>
   
  );
};

export default Workshops;

