import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProctoringForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        totalStudents: "",
        semesterBranchSec: "",
        eligibleStudents: "",
        passedStudents: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:5000/fetchData", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user ID");
                }

                const data = await response.json();
                setFormData((prevData) => ({
                    ...prevData,
                    teacher: data.id,
                }));
            } catch (error) {
                console.error("Error fetching user ID:", error);
            }
        };

        fetchUserId();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name.includes("Students") ? Number(value) || "" : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: "", text: "" });

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                "http://localhost:5000/proc/proctoring-data",
                formData,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            setMessage({ type: "success", text: "Proctoring data submitted successfully!" });
            console.log("Proctoring data submitted:", response.data);
            setTimeout(() => navigate("/partb"), 2000);
        } catch (error) {
            setMessage({ type: "error", text: "Error submitting proctoring data!" });
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Proctoring Form</h2>
            {message.text && (
                <p style={{ color: message.type === "success" ? "green" : "red" }}>
                    {message.text}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <input type="number" name="totalStudents" value={formData.totalStudents} onChange={handleChange} placeholder="Total Students" required />
                <input type="text" name="semesterBranchSec" value={formData.semesterBranchSec} onChange={handleChange} placeholder="Sem-Branch-Sec" required />
                <input type="number" name="eligibleStudents" value={formData.eligibleStudents} onChange={handleChange} placeholder="Eligible Students" required />
                <input type="number" name="passedStudents" value={formData.passedStudents} onChange={handleChange} placeholder="Passed Students" required />
                <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
            </form>
        </div>
    );
};

export default ProctoringForm;
