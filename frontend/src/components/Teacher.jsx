import React from 'react'
import { Link,useParams } from 'react-router-dom'

const Teacher = (props) => {
  const {id} =useParams();
  const teacher=props.faculty.find((teacher)=>teacher.id===id);
  if(!teacher)
    return ;
  return (
    <div>
      Teecher Details..
    </div>
  )
}

export default Teacher
