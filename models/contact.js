import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message:String
});

export const contactModel =mongoose.models.Contact || mongoose.model("Contact", ContactSchema);