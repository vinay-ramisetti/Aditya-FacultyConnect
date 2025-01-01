import React, { useState, useEffect } from 'react'; // Ensure hooks are imported
import {  Routes, Route } from 'react-router-dom';
import axios from 'axios';
import '../tailwind.css'; // Adjust the path if needed
import Login from './Login';
import Home from './Home';
import Welcome from './Welcome';
import Signup from './Signup';
import Branch from './Branch';
import Teacher from './Teacher';
import Profile from './Profile';

function App() {
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setFaculty([
      // { name: "vinay", department: "CSE" },
      // { name: "pranay", department: "ECE" },
      // { name: "venkat", department: "ECE" },
      // { name: "Ram", department: "Mech" }
    ]);

    setDepartments([
      { name: "Computer Science", description: "Focuses on AI" },
      { name: "Electronics and Communication", description: "Focuses on Chip design" },
      { name: "Mechanical Engineering", description: "Focuses on Machines" }
    ]);

    const fetchData = async () => {
      try {
        const facultyData = await axios.get('http://localhost:5000/fetchData/faculty');
        setFaculty(facultyData.data);
        console.log(faculty);
     // 
      } catch (error) {
        console.log('Error occurred:', error);
      }
    };
    fetchData();
  }, []);
       
  return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={<Home faculty={faculty} departments={departments} />}
        />
        <Route
          path="/department/:branchName"
          element={<Branch faculty={faculty} departments={departments} />}
        />
         <Route
          path="/profile"
          element={<Profile/>}
        />
        <Route
          path="/teacher/:id"
          element={<Teacher faculty={faculty} />}
        />
      </Routes>
  );
}

export default App;
