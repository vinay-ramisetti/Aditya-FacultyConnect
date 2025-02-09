import React, { useEffect, useState } from 'react';
import './DisplayCourses.css'; 
import { IoMdAdd } from 'react-icons/io';

const DisplayCourses = ({ coursesData }) => {
  const [data, setData] = useState(coursesData || []);

  useEffect(() => {
    if (!coursesData) {
      // Fetch only if no data is passed via props
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            console.error("No token found in localStorage");
            return;
          }

          const response = await fetch('http://localhost:5000/update/raw', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          });

          if (response.ok) {
            const result = await response.json();
            setData(result.data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [coursesData]);

  return (
    <div>
      <table className="courses-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Course Name</th>
            <th>Sem-Branch-Sec</th>
            <th>No. of Students Appeared</th>
            <th>Passed</th>
            <th>Pass %</th>
            <th>Average %</th>
            <th>Self-Assessment Marks</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((course, index) => (
              <tr key={course.id || index}>
                <td>{index + 1}</td>
                <td>{course.courseName}</td>
                <td>{course.semester}</td>
                <td>{course.numberOfStudents}</td>
                <td>{course.passCount}</td>
                <td>{((course.passCount / course.numberOfStudents) * 100).toFixed(2)}%</td>
                {index === 0 && (
                  <>
                    <td rowSpan={data.length}>{data[data.length - 1].averagePercentage}</td>
                    <td rowSpan={data.length}>{data[data.length - 1].selfAssessmentMarks}</td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCourses;
