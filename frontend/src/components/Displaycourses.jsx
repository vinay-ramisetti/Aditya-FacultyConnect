import React, { useEffect, useState } from 'react';
import './DisplayCourses.css';
import { IoMdAdd } from 'react-icons/io';

const DisplayCourses = ({ coursesData }) => {
  const [data, setData] = useState(coursesData || []);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    courseName: '',
    semester: '',
    numberOfStudents: '',
    passCount: ''
  });

  useEffect(() => {
    if (!coursesData) {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            console.error('No token found in localStorage');
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

  const handleRowSelect = (course) => {
    setSelectedCourse(course);
    setShowForm(false); // Close the form if a different row is selected
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error('Course ID is undefined');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/update/courses/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setData(data.filter((course) => course._id !== id));
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleUpdateClick = (course) => {
    setSelectedCourse(course);
    setFormData(course); // Pre-fill form with selected course data
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/update/courses/${selectedCourse._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedCourse = await response.json();
        setData(data.map((course) => (course._id === updatedCourse._id ? updatedCourse : course)));
        setShowForm(false); // Close the form after successful update
      }
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <div>
      <table className='courses-table'>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((course, index) => (
              <tr
                key={course._id || index}
                onClick={() => handleRowSelect(course)}
                style={{
                  backgroundColor: selectedCourse?._id === course._id ? '#f0f0f0' : 'transparent',
                }}
              >
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
                <td>
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(course._id); }}>Delete</button>
                  <button onClick={(e) => { e.stopPropagation(); handleUpdateClick(course); }}>Update</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='9' style={{ textAlign: 'center' }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showForm && (
        <div className='update-form'>
          <h2>Update Course</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type='text'
              name='courseName'
              value={formData.courseName}
              onChange={handleInputChange}
              placeholder='Course Name'
              required
            />
            <input
              type='text'
              name='semester'
              value={formData.semester}
              onChange={handleInputChange}
              placeholder='Semester'
              required
            />
            <input
              type='number'
              name='numberOfStudents'
              value={formData.numberOfStudents}
              onChange={handleInputChange}
              placeholder='Number of Students'
              required
            />
            <input
              type='number'
              name='passCount'
              value={formData.passCount}
              onChange={handleInputChange}
              placeholder='Pass Count'
              required
            />
            <button type='submit'>Save Changes</button>
            <button type='button' onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DisplayCourses;
