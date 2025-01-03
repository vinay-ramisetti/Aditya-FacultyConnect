import React from 'react'
import { Link,useParams } from 'react-router-dom'
import Navbar from './Navbar';
import OthersResearch from './OthersResearch';

const Teacher = (props) => {
  const {id} =useParams();
  const teacher=props.faculty.find((teacher)=>teacher._id===id);
  if(!teacher)
    return ;
  return (
    <div>
      <Navbar/>
      Teacher Information:
      <div>
        <label>Name:</label>
        {teacher.fullName}
      </div>
      <div>
        <label>Designation:</label>
        {teacher.designation}
      </div>
      <div>
        <label>Department: </label>
        {teacher.department}
      </div>
      <OthersResearch Id={teacher._id}/>
    </div>
  )
}

export default Teacher
