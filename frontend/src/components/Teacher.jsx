import React from 'react'
import { Link,useParams } from 'react-router-dom'

const Teacher = (props) => {
  const {id} =useParams();
  const teacher=props.faculty.find((teacher)=>teacher._id===id);
  if(!teacher)
    return ;
  return (
    <div>
      Teacher Details..
    </div>
  )
}

export default Teacher
