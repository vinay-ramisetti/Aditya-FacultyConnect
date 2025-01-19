import React from 'react'
import { useState,useEffect } from 'react'

const OthersArticles = ({Id}) => {
  const [articles,setArticles]=useState([]);
   useEffect(() => {
     const fetchData= async ()=>{
      try{
        const response= await fetch(`http://localhost:5000/article/othersArticles/${Id}`);
        if(response.ok){
          const data=await response.json();
          setArticles(data);
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
      <h2>Articles Details:</h2>
         {articles.length > 0 ? (
           <div>
             {articles.map((article) => (
               <div
                 key={article._id}
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
                   <h3>{article.title}</h3>
                   <p>{article.content}</p>
                   <p>
                     <strong>Published Date:</strong>{' '}
                     {new Date(article.createdAt).toLocaleDateString()}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         ) : (
           <p>No articles found.</p>
         )}
       </div>
  )
}

export default OthersArticles

