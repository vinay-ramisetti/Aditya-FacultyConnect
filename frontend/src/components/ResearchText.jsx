import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ResearchText = () => {
  const [data, setData] = useState(null); // Store fetched research data
  const [loading, setLoading] = useState(true); // Handle loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/research/researchtext', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData); // Save API response
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px', color: '#666' }}>Loading...</p>;
  }

  if (!data) {
    return <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px', color: 'red' }}>No Research Data Found</p>;
  }

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '20px',
          padding: '8px 15px',
          fontSize: '14px',
          fontWeight: 'bold',
          width: '100px',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          position: 'absolute',
          top: '10px',
          left: '10px'
        }}
      >
        ← Back
      </button>

      <div style={{ marginTop: '50px' }}>
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '16px' }}>
          <thead>
            <tr style={{ backgroundColor: '#d0e8f2', fontWeight: 'bold' }}>
              <th>S.No</th>
              <th>Research Item</th>
              <th>Count</th>
              <th>Marks Obtained</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>a.</td>
              <td><a href="sciarticles">No. of SCI indexed articles</a></td>
              <td>{data.SciArticlesSize}</td>
              <td>{data.SciMarks}</td>
            </tr>
            <tr>
              <td>b.</td>
              <td><a href="wosarticles">No. of Scopus/WoS articles (Max: 60)</a></td>
              <td>{data.WosArticlesSize}</td>
              <td>{data.WosMarks}</td>
            </tr>
            <tr>
              <td>c.</td>
              <td><a href="proposals">No. of Proposals submitted/funded (Max: 10)</a></td>
              <td>{data.ProposalsSize}</td>
              <td>{data.ProposalMarks}</td>
            </tr>
            <tr>
              <td>d.</td>
              <td colSpan="2"><b>Research – Others (Max: 10)</b></td>
              <td><b>{data.SelfAssessment}</b></td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ marginTop: '20px' }}>Research - Others</h3>
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '16px' }}>
          <thead>
            <tr style={{ backgroundColor: '#d0e8f2', fontWeight: 'bold' }}>
              <th>Research - Others</th>
              <th>Count</th>
              <th>Marks Obtained</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="papers">No. of Conference Papers</a></td>
              <td>{data.PapersSize}</td>
              <td>{data.PapersMarks}</td>
            </tr>
            <tr>
              <td><a href="books">No. of Books authored</a></td>
              <td>{data.BooksSize}</td>
              <td>{data.BooksMarks}</td>
            </tr>
            <tr>
              <td><a href="chapters">No. of Chapters authored</a></td>
              <td>{data.ChaptersSize}</td>
              <td>{data.ChaptersMarks}</td>
            </tr>
            <tr>
              <td><a href="patentsGranted">No. of Patents Granted</a></td>
              <td>{data.PGrantedSize}</td>
              <td>{data.PGrantedMarks}</td>
            </tr>
            <tr>
              <td><a href="patentsFiled">No. of Patents Filed</a></td>
              <td>{data.PFiledSize}</td>
              <td>{data.PFiledMarks}</td>
            </tr>
            <tr>
              <td colSpan="2"><b>Self-Assessment Marks (Max: 10)</b></td>
              <td><b>{data.SelfAssessment}</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResearchText;
