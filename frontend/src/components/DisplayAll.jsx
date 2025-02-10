import React from 'react';
import ClassInfo from './ClassInfo';
import ResearchText from './ResearchText';
import Navbar from './Navbar';
import Others from './Others';
import Workshops from './Workshops';

const DisplayAll = () => {
  return (
    <>
    
    <div>
    <Navbar/>
    <div>
    <h1 style={{padding:'15px', marginTop: '30px',fontFamily:'YourFontFamily'}}>PART B: Performance Attributes </h1>
    </div>
      
      <ClassInfo />
      <div style={{ margin: '20px 0' }} />
      <ResearchText />
      <Workshops />
      <div style={{ margin: '20px 0' }} />
       <Others/>
    </div>
    </>
  );
};

export default DisplayAll;