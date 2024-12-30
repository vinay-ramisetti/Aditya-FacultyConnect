import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Faculty from './Faculty';
import Departments from './Departments';

const Home = () => {
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setFaculty([{ name: "vinay", department: "CSE" },{ name: "pranay", department: "ECE" },{ name: "venkat", department: "ECE" },{ name: "Ram", department: "Mech" }]);
    setDepartments([{ name: "Computer Science ", des: "Focuses on AI" },
      { name: "Electronics and Communication ", des: "Focuses on Chip design" },
      { name: "Mechanical Engineering", des: "Focuses on Machines" }

    ]);
  }, []); 

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
