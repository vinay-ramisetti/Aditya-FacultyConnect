import React from 'react';
import Navbar from './Navbar';
import Faculty from './Faculty';
import Departments from './Departments';
import Footer from './Footer';
import Header from './Header';
import Carousal from './Carousal';

const Home = (props) => {
  const faculty = props.faculty;
  const departments = props.departments;

  return (
    <div>
      <Header />
      <Navbar />
      <Carousal/>
      <div className='m-2 p-1'>
        <div>
          <Faculty faculty={faculty} />
        </div>
        <div>
          <Departments departments={departments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
