import React, { useState, useEffect } from 'react'; 
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
import AddResearch from './AddResearch';
import SignupSuccess from './SignupSuccess';
import Accept from './Accept';
import UpdateClass from './UpdateClass';
import DisplayClasses from './DisplayClasses';
import Researchinfo from './Researchinfo';
import Articles from './Articles';
import AddArticle from './AddArticle';
import cseImage from '../images/cse.jpeg';
import eceImage from '../images/ece.jpg';
import eeImage from '../images/ee.jpeg';
import mechImage from '../images/mech.jpg';
import civilImage from '../images/civil.jpg';
import cheImage from '../images/che.jpeg';
import bioImage from '../images/bio.jpeg';
import Workshops from './Workshops';
import About from './About';
import Addworkshop from './AddWorkshop';
import ClassInfo from './ClassInfo';


function App() {
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {

    setDepartments([
      { name: "CSE", description: "Focuses on AI", image: cseImage },
      { name: "ECE", description: "Focuses on Chip design", image: eceImage },
      { name: "EE", description: "Focuses on Circuits", image: eeImage },
      { name: "MECH", description: "Focuses on Machines", image: mechImage },
      { name: "CIVIL", description: "Focuses on Designs", image: civilImage },
      { name: "CHE", description: "Focuses on Chemicals", image: cheImage },
      { name: "BIO", description: "Focuses on Organics", image: bioImage },
    ]);

    const fetchData = async () => {
      try {
        const facultyData = await axios.get('http://localhost:5000/fetchData/faculty');
        setFaculty(facultyData.data);
        console.log(faculty);
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
        <Route path="/signup/signup" element={<SignupSuccess />} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/addarticle" element={<AddArticle/>} />
        <Route
          path="/home"
          element={<Home faculty={faculty} departments={departments} />}
        />
        <Route
          path="/department/:branchName"
          element={<Branch faculty={faculty} />}
        />
        <Route
          path="/about"
          element={<About/>}
        />
         <Route
          path="/profile"
          element={<Profile/>}
        />
         <Route
          path="/class"
          element={<UpdateClass/>}
        />
         <Route
          path="/classes"
          element={<ClassInfo/>}
        />
        <Route
          path="/teacher/:id"
          element={<Teacher faculty={faculty} />}
        />
           <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/addResearch"
          element={<AddResearch />}
        />
        <Route
          path="/addworkshop"
          element={<Addworkshop />}
        />
        <Route
          path="/accept"
          element={<Accept />}
        />
        <Route
          path="/research"
          element={<Researchinfo />}
        />
        <Route
          path="/workshops"
          element={<Workshops />}
        />
      </Routes>
  );
}

export default App;
