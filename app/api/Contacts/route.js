import { URL } from "../../../lib/db";
import { contactModel } from "@/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    
   await mongoose.connect(URL);

    const body = await req.json();
    const { name, email, phone, message } = body;

    
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const contact = new contactModel({
      name,
      email,
      phone,
      message,
    });

    await contact.save();

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
