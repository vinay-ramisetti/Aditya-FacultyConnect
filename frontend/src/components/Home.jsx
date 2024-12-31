import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Faculty from './Faculty';
import Departments from './Departments';
import axios from 'axios';

const Home = () => {
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setFaculty([{ name: "vinay", department: "CSE" },{ name: "pranay", department: "ECE" },{ name: "venkat", department: "ECE" },{ name: "Ram", department: "Mech" }]);
    setDepartments([{ name: "Computer Science ", des: "Focuses on AI" },
      { name: "Electronics and Communication ", des: "Focuses on Chip design" },
      { name: "Mechanical Engineering", des: "Focuses on Machines" }

    ]);
    // const fetchData= async()=>{
    // try{
    //   const facultyData=await axios.get('http://localhost:5000/api/faculty');
    //   setFaculty(facultyData.data);

    //   const departmentData=await axios.get('http://localhost:5000/api/departments');
    //   setDepartments(departmentData.data);
    // }
    // catch(error){
    //   console.log("Error occurred:",error);
    // }
    // }
    // fetchData();
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
