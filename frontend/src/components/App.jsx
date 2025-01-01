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
import Logout from './logout';
import UpdateUser from './UserUpdate';

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
      { name: "CSE", description: "Focuses on AI" },
      { name: "ECE", description: "Focuses on Chip design" },
      { name: "MECH", description: "Focuses on Machines" }
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
        <Route path="/add-user" element={<UpdateUser />} />
        <Route
          path="/home"
          element={<Home faculty={faculty} departments={departments} />}
        />
        <Route
          path="/department/:branchName"
          element={<Branch faculty={faculty} />}
        />
         <Route
          path="/profile"
          element={<Profile/>}
        />
        <Route
          path="/teacher/:id"
          element={<Teacher faculty={faculty} />}
        />
           <Route
          path="/logout"
          element={<Logout />}
        />
      </Routes>
  );
}

export default App;
