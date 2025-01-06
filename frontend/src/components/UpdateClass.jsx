import React, { useState, useEffect } from 'react';
import './UpdateClass.css';
import axios from 'axios';

const UpdateClass = () => {
    const [formData, setFormData] = useState({
        className: '',
        courseName: '',
        semester: '',
        branch: '',
        section: '',
        numberOfStudents: '',
        appeared: '',
        passCount: '',

        selfAssessmentMarks: '',
        courseFeedback: '',
        above95: '',
        between85And95: '',
        between75And85: '',
        below75: '',
        teacher: ''
    });

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const token = localStorage.getItem('authToken');
             
                const response = await fetch('http://localhost:5000/fetchData', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setFormData((prevData) => ({
                        ...prevData,
                        teacher: data.id
                    }));
                } else {
                    console.error('Failed to fetch user ID');
                }
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        fetchUserId();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.post('http://localhost:5000/update/classes', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Class updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating class:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="className" value={formData.className} onChange={handleChange} placeholder="Class Name" required />
            <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} placeholder="Course Name" required />
            <input type="text" name="semester" value={formData.semester} onChange={handleChange} placeholder="Semester" required />
            <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Branch" required />
            <input type="text" name="section" value={formData.section} onChange={handleChange} placeholder="Section" required />
            <input type="number" name="numberOfStudents" value={formData.numberOfStudents} onChange={handleChange} placeholder="Number of Students" required />
            <input type="number" name="appeared" value={formData.appeared} onChange={handleChange} placeholder="Appeared" required />
            <input type="number" name="passCount" value={formData.passCount} onChange={handleChange} placeholder="Pass Count" required />
            
            <input type="number" name="selfAssessmentMarks" value={formData.selfAssessmentMarks} onChange={handleChange} placeholder="Self-Assessment Marks" required />
            <textarea name="courseFeedback" value={formData.courseFeedback} onChange={handleChange} placeholder="Course Feedback"></textarea>
            <input type="number" name="above95" value={formData.above95} onChange={handleChange} placeholder="Marks ≥ 95%" />
            <input type="number" name="between85And95" value={formData.between85And95} onChange={handleChange} placeholder="Marks ≥ 85% & < 95%" />
            <input type="number" name="between75And85" value={formData.between75And85} onChange={handleChange} placeholder="Marks ≥ 75% & < 85%" />
            <input type="number" name="below75" value={formData.below75} onChange={handleChange} placeholder="Marks < 75%" />
            <button type="submit">Update Class</button>
        </form>
    );
};

export default UpdateClass;
