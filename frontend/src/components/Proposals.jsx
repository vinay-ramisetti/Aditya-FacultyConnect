import React from 'react'
import { useNavigate } from 'react-router-dom';

const Proposals = () => {
  const navigate = useNavigate();
  return (
    <div style={{padding:'15px'}}>
       <div style={{width:'90px', marginLeft:'1100px'}}>
        <button  onClick={() => navigate('/addproposals')}> + Add</button>
      </div>
      <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '1rem' }}>
        c) Project Proposals Submitted / Funded:
      </h3>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            fontSize: '1rem',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#d0e8f2', fontWeight: 'bold' }}>
              <th
                style={{
                  padding: '0.5rem',
                  border: '1px solid #000',
                }}
              >
                S.No
              </th>
              <th
                style={{
                  padding: '0.5rem',
                  border: '1px solid #000',
                }}
              >
                Submitted/Funded Proposal details
              </th>
              <th
                style={{
                  padding: '0.5rem',
                  border: '1px solid #000',
                }}
              >
                Funding Agency
              </th>
              <th
                style={{
                  padding: '0.5rem',
                  border: '1px solid #000',
                }}
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((num) => (
              <tr key={num} style={{ textAlign: 'center' }}>
                <td
                  style={{
                    padding: '0.5rem',
                    border: '1px solid #000',
                  }}
                >
                  {num}
                </td>
                <td
                  style={{
                    padding: '0.5rem',
                    border: '1px solid #000',
                  }}
                >
                  -
                </td>
                <td
                  style={{
                    padding: '0.5rem',
                    border: '1px solid #000',
                  }}
                >
                  -
                </td>
                <td
                  style={{
                    padding: '0.5rem',
                    border: '1px solid #000',
                  }}
                >
                  -
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Proposals
