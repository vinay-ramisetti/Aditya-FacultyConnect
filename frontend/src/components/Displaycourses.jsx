import React, { useEffect, useState } from 'react';
import './DisplayCourses.css'; // Import the CSS file
import { IoMdAdd } from 'react-icons/io';

const DisplayCourses = () => {
    const [data, setData] = useState([]); // Ensure `data` is always an array

    useEffect(() => {
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
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    console.error(`Failed to fetch data: ${response.statusText}`);
                    const errorMessage = await response.text();
                    console.error('Error message:', errorMessage);
                    return;
                }

                const data2 = await response.json();
                console.log("Fetched Data:", data2); // Debugging log

                if (Array.isArray(data2.data)) {
                    setData(data2.data);
                } else {
                    console.error("Unexpected API response format:", data2);
                    setData([]); 
                }

            } catch (error) {
                console.error('Error occurred while fetching data:', error);
            }
        };

        fetchData();
    }, []);
   
    return (
        <div>
            <table className="courses-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Course Name</th>
                        <th>Sem-Branch-Sec</th>
                        <th>No. of students appeared (A)</th>
                        <th>Passed (B)</th>
                        <th>Pass Percentage (B/A*100)</th>
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

                                {/* Only show "Average %" and "Self-Assessment Marks" once in the first row */}
                                {index === 0 && (
                                    <>
                                        <td rowSpan={data.length}>{course.averagePercentage}</td>
                                        <td rowSpan={data.length}>{course.selfAssessmentMarks}</td>
                                    </>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" style={{ textAlign: 'center' }}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayCourses;
