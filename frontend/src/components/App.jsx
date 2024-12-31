import React, { useState, useEffect } from 'react'; // Ensure hooks are imported
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../tailwind.css'; // Adjust the path if needed
import Login from './Login';
import Home from './Home';
import Welcome from './Welcome';
import Signup from './Signup';
import Branch from './Branch';
import Teacher from './Teacher';

function App() {
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setFaculty([
      { name: "vinay", department: "CSE" },
      { name: "pranay", department: "ECE" },
      { name: "venkat", department: "ECE" },
      { name: "Ram", department: "Mech" }
    ]);

    setDepartments([
      { name: "Computer Science", des: "Focuses on AI" },
      { name: "Electronics and Communication", des: "Focuses on Chip design" },
      { name: "Mechanical Engineering", des: "Focuses on Machines" }
    ]);

    // Uncomment the code below for API integration
    // const fetchData = async () => {
    //   try {
    //     const facultyData = await axios.get('http://localhost:5000/api/faculty');
    //     setFaculty(facultyData.data);

    //     const departmentData = await axios.get('http://localhost:5000/api/departments');
    //     setDepartments(departmentData.data);
    //   } catch (error) {
    //     console.log('Error occurred:', error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <Router>
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
          path="/teacher/:id"
          element={<Teacher faculty={faculty} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
