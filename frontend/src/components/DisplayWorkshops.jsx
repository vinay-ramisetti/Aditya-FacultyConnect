import React, { useEffect, useState } from 'react';
import './DisplayWorkshops.css';

const DisplayWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [upcomingWorkshops, setUpcomingWorkshops] = useState([]);
  const [completedWorkshops, setCompletedWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch('http://localhost:5000/workshop/data');
        const data = await response.json();
        setWorkshops(data);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchWorkshops();
  }, []);

  useEffect(() => {
    // Divide workshops into upcoming and completed based on the date
    const currentDate = new Date();
    const upcoming = workshops.filter(workshop => new Date(workshop.Date) >= currentDate);
    const completed = workshops.filter(workshop => new Date(workshop.Date) < currentDate);

    setUpcomingWorkshops(upcoming);
    setCompletedWorkshops(completed);
  }, [workshops]);

  return (
    <div className="workshops-container">
      {/* Upcoming Workshops */}
      <div className="workshop-section">
        <h2>Upcoming Workshops</h2>
        {upcomingWorkshops.length > 0 ? (
          upcomingWorkshops.map((workshop) => (
            <div key={workshop._id} className="workshop-card">
              <h3 className="workshop-title">{workshop.title}</h3>
              <p className="workshop-description">{workshop.Description}</p>
              <p><strong>Category:</strong> {workshop.Category || 'N/A'}</p>
              <p><strong>Date:</strong> {new Date(workshop.Date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {workshop.StartTime} - {workshop.EndTime}</p>
              <p><strong>Venue:</strong> {workshop.Venue || 'N/A'}</p>
              <p><strong>Mode:</strong> {workshop.Mode}</p>
              <p><strong>Instructor:</strong> {workshop.userDetails.fullName}</p>
            </div>
          ))
        ) : (
          <p className="no-workshops">No upcoming workshops available.</p>
        )}
      </div>

      {/* Completed Workshops */}
      <div className="workshop-section">
        <h2>Completed Workshops</h2>
        {completedWorkshops.length > 0 ? (
          completedWorkshops.map((workshop) => (
            <div key={workshop._id} className="workshop-card">
              <h3 className="workshop-title">{workshop.title}</h3>
              <p className="workshop-description">{workshop.Description}</p>
              <p><strong>Category:</strong> {workshop.Category || 'N/A'}</p>
              <p><strong>Date:</strong> {new Date(workshop.Date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {workshop.StartTime} - {workshop.EndTime}</p>
              <p><strong>Venue:</strong> {workshop.Venue || 'N/A'}</p>
              <p><strong>Mode:</strong> {workshop.Mode}</p>
              <p><strong>Instructor:</strong> {workshop.userDetails.fullName}</p>
            </div>
          ))
        ) : (
          <p className="no-workshops">No completed workshops available.</p>
        )}
      </div>
    </div>
  );
};

export default DisplayWorkshops;
