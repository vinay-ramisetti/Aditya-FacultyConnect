import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Faculty from './Faculty';
import Departments from './Departments';

const Home = (props) => {
  const faculty=props.faculty;
  const departments=props.departments;
  return (
    <div>
      <Navbar />
      <div className='m-2 p-1'>
        <div>
          <Faculty faculty={faculty} />
        </div>
        <div>
          <Departments departments={departments} />
        </div>
      </div>
    </div>
  );
};

export default Home;
