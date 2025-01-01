import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Faculty from './Faculty';
import Departments from './Departments';

const Home = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const faculty = props.faculty;
  const departments = props.departments;

  useEffect(() => {
    // Check if the user is logged in by verifying the presence of a token
    const token = localStorage.getItem('authToken'); // Adjust the key as necessary
    
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className='m-2 p-1'>
        {isLoggedIn ? (
          <>
            <div>
              <Faculty faculty={faculty} />
            </div>
            <div>
              <Departments departments={departments} />
            </div>
          </>
        ) : (
          <p>Please login to view this content.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
