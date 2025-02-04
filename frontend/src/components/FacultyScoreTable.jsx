import React, { useEffect, useState } from "react";
import "./FacultyScoreTable.css";

const FacultyScoreTable = () => {
  const [obtainedScores, setObtainedScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/faculty-scores"); // Replace with actual API endpoint
        const result = await response.json();
        setObtainedScores(result);
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };
    fetchData();
  }, []);

  const data = [
    { parameter: "Courses Average Pass %", max: 20, doctorateMin: 10, nonDoctorateMin: 10 },
    { parameter: "Course Feedback", max: 20, doctorateMin: 10, nonDoctorateMin: 10 },
    { parameter: "Proctoring Students Average pass %", max: 20, doctorateMin: 10, nonDoctorateMin: 10 },
    { parameter: "Research - SCI papers", max: 60, doctorateMin: 40, nonDoctorateMin: 30 },
    { parameter: "Research - Scopus/WoS Papers", max: 10, doctorateMin: 10, nonDoctorateMin: 0 },
    { parameter: "Research – Proposals Submitted/funded", max: 10, doctorateMin: 10, nonDoctorateMin: 0 },
    { parameter: "Research - Others", max: 10, doctorateMin: 0, nonDoctorateMin: 0 },
    { parameter: "Workshops, FDPs, STTP attended", max: 20, doctorateMin: 15, nonDoctorateMin: 20 },
    { parameter: "Outreach Activities", max: 10, doctorateMin: 10, nonDoctorateMin: 0 },
    { parameter: "Additional responsibilities in the Department / College", max: 20, doctorateMin: 20, nonDoctorateMin: 20 },
    { parameter: "Special Contribution", max: 10, doctorateMin: 10, nonDoctorateMin: 10 },
  ];

  return (
    <div className="table-container">
      <h2 className="table-title">Faculty Score Table</h2>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Parameter</th>
            <th>Max Score</th>
            <th>Min Score for Doctorate</th>
            <th>Min Score for Non-Doctorate</th>
            <th>Obtained Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.parameter}</td>
              <td>{row.max}</td>
              <td>{row.doctorateMin}</td>
              <td>{row.nonDoctorateMin}</td>
              <td>{obtainedScores[index] || 0}</td>
            </tr>
          ))}
          <tr className="total-row">
            <td colSpan="2">Total Marks</td>
            <td>200</td>
            <td>135</td>
            <td>110</td>
            <td>{obtainedScores.reduce((sum, score) => sum + (score || 0), 0)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FacultyScoreTable;
