import React from 'react'
import { useState,useEffect } from 'react'

const OthersResearch = ({Id}) => {
  const [researches,setResearches]=useState([]);
   useEffect(() => {
     const fetchData= async ()=>{
      try{
        const response= await fetch(`http://localhost:5000/research/otherResearch/${Id}`);
        if(response.ok){
          const data=await response.json();
          setResearches(data);
          console.log("Fetched data:",data);
        }
        else{
          console.error("Error:", response.statusText);
        }
      }catch(error){
        console.error("Fetch error:", error);
      }
     }
     fetchData();
   }, [])
   
  return (
    <div style={{ padding: '20px' }}>
      <h2>Research Details:</h2>
         {researches.length > 0 ? (
           <div>
             {researches.map((research) => (
               <div
                 key={research._id}
                 style={{
                   display: 'flex',
                   justifyContent: 'space-between',
                   alignItems: 'center',
                   border: '1px solid #ccc',
                   padding: '15px',
                   marginBottom: '10px',
                   borderRadius: '5px',
                 }}
               >
                 <div>
                   <h3>{research.title}</h3>
                   <p>{research.description}</p>
                   <p>
                     <strong>Published Date:</strong>{' '}
                     {new Date(research.publishedDate).toLocaleDateString()}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         ) : (
           <p>No researches found.</p>
         )}
       </div>
  )
}

export default OthersResearch
