import mongoose from "mongoose";
const AppointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    date: String,
    time: String,
    description: String
});

export const appointmentModel =mongoose.models.appointment || mongoose.model("appointment", AppointmentSchema);