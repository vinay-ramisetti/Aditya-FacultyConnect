const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    className: { type: String, required: true },
    courseName: { type: String, required: true },
    semester: { type: String, required: true },
    branch: { type: String, required: true },
    section: { type: String, required: true },
    numberOfStudents: { type: Number, required: true },
    appeared: { type: Number, required: true },
    passCount: { type: Number, required: true },
    passPercentage: { type: Number, required: true },
    averagePercentage: { type: Number, required: true },
    selfAssessmentMarks: { type: Number, required: true },
    courseFeedback: { type: String },
    marksDistribution: {
        above95: { type: Number, default: 0 },
        between85And95: { type: Number, default: 0 },
        between75And85: { type: Number, default: 0 },
        below75: { type: Number, default: 0 }
    },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Class", classSchema);