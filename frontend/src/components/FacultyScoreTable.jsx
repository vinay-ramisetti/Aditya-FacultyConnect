import React, { useEffect, useState } from "react";
import "./FacultyScoreTable.css";

const FacultyScoreTable = ({ user }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchedData = [
            { sno: "1", parameter: "Courses Average Pass %", max: 20, doctorateMin: 10, nonDoctorateMin: 10, score: user.AvgSelfAsses },
            { sno: "2", parameter: "Course Feedback", max: 20, doctorateMin: 10, nonDoctorateMin: 10, score: user.feedSelfAsses },
            { sno: "3", parameter: "Proctoring Students Average pass %", max: 20, doctorateMin: 10, nonDoctorateMin: 10, score: user.ProctorSelfAsses },

            // Grouped Research section (4a & 4b share the same data)
            { sno: "4a", parameter: "Research - SCI Papers", max: 60, doctorateMin: 40, nonDoctorateMin: 30, score: user.SciMarks, merged: true },
            { sno: "4b", parameter: "Research - Scopus/WoS Papers", merged: true }, // Shares data with 4a

            // Separate research categories (4c & 4d have their own values)
            { sno: "4c", parameter: "Research – Proposals Submitted/Funded", max: 10, doctorateMin: 10, nonDoctorateMin: 0, score: user.ProposalsMarks },
            { sno: "4d", parameter: "Research - Others", max: 10, doctorateMin: 0, nonDoctorateMin: 0, score: user.ResearchSelfAsses },

            { sno: "5", parameter: "Workshops, FDPs, STTP attended", max: 20, doctorateMin: 15, nonDoctorateMin: 20, score: user.WorkshopMarks },
            { sno: "6", parameter: "Outreach Activities", max: 10, doctorateMin: 10, nonDoctorateMin: 0, score: user.OutreachSelfAsses },
            { sno: "7", parameter: "Additional responsibilities in the Department / College", max: 20, doctorateMin: 20, nonDoctorateMin: 20, score: user.AddSelfAsses },
            { sno: "8", parameter: "Special Contribution", max: 10, doctorateMin: 10, nonDoctorateMin: 10, score: user.SpeacialSelfAsses },
        ];

        setData(fetchedData);
    }, [user]);

    return (
        <div>
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
                    {data.map((row, index) =>
                        row.merged ? (
                            // Merged row for 4a & 4b
                            <tr key={index}>
                                <td>{row.sno}</td>
                                <td>{row.parameter}</td>
                                {/* Merge columns for 4a & 4b */}
                                {row.sno === "4a" && (
                                    <>
                                        <td rowSpan="2">{row.max}</td>
                                        <td rowSpan="2">{row.doctorateMin}</td>
                                        <td rowSpan="2">{row.nonDoctorateMin}</td>
                                        <td rowSpan="2">{row.score || 0}</td>
                                    </>
                                )}
                            </tr>
                        ) : (
                            // Normal row for other parameters
                            <tr key={index}>
                                <td>{row.sno}</td>
                                <td>{row.parameter}</td>
                                <td>{row.max}</td>
                                <td>{row.doctorateMin}</td>
                                <td>{row.nonDoctorateMin}</td>
                                <td>{row.score || 0}</td>
                            </tr>
                        )
                    )}
                    <tr className="total-row">
                        <td colSpan="2">Total Marks</td>
                        <td>200</td>
                        <td>135</td>
                        <td>110</td>
                        <td>{data.reduce((sum, row) => sum + (row.score || 0), 0)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FacultyScoreTable;
