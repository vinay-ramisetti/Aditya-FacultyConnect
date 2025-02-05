import React, { useEffect, useState } from 'react';
import './DisplayWorkshops.css';

const DisplayWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [totalMarks, setTotalMarks] = useState(0);
  const [loading, setLoading] = useState(true);

  // Function to calculate duration
  const calculateDuration = (startTime, endTime) => {
    if (!startTime || !endTime) return "-";

    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const start = new Date();
    start.setHours(startHours, startMinutes, 0);

    const end = new Date();
    end.setHours(endHours, endMinutes, 0);

    let diff = (end - start) / (1000 * 60); // Convert ms to minutes

    if (diff < 0) diff += 24 * 60; // Handle cases where end time is past midnight

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    return `${hours}h ${minutes}m`;
  };

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/workshop/data', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        setWorkshops(data.Workshops);  // ✅ Correct variable name
        setTotalMarks(data.TotalMarks); // ✅ Store total marks
      } catch (error) {
        console.error('Error fetching workshops:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <div className="workshops-container">
      <h2 className="workshop-title">Workshops/FDPs/STTP/Refresher Courses Attended</h2>
      <p className="workshop-subtitle">
        (1 workshop - 5 marks, 5 days FDP/STTP/Refresher Course - 10 marks, NPTEL Course - 10 marks)
      </p>

      {loading ? (
        <p>Loading workshops...</p>
      ) : (
        <div className="workshop-table-container">
          <table className="workshop-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Program</th>
                <th>Duration</th>
                <th>Date & Place</th>
                <th>Organized by</th>
              </tr>
            </thead>
            <tbody>
              {workshops.length > 0 ? (
                workshops.map((workshop, index) => (
                  <tr key={workshop._id}>
                    <td>{index + 1}</td>
                    <td>{workshop.title || '-'}</td>
                    <td>{calculateDuration(workshop.StartTime, workshop.EndTime)}</td> 
                    <td>
                      {new Date(workshop.Date).toLocaleDateString()} <br />
                      {workshop.Venue || '-'}
                    </td>
                    <td>{workshop.OrganizedBy || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">No workshops available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <div className="self-assessment">
        <strong>Self-Assessment Marks (Max: 20) :- {totalMarks}</strong>
      </div>
    </div>
  );
};

export default DisplayWorkshops;
