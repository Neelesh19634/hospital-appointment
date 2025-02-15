import { appointmentModel } from "@/models/appointment";
import { URL } from "../../../lib/db";

import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    
   await mongoose.connect(URL);

    const body = await req.json();
    const { name, email,date, time, department, description,userId } = body;

    
    if (!name || !email || !date || !time || !department || !description) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const users = new appointmentModel({
      name,
      email,
      date,
      time,
      department,
      description,
      userId
    });

    await users.save();

    return NextResponse.json(
      { message: "Appointment form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in appointment form submission:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}


export async function GET(req) {
  await mongoose.connect(URL);
  const data=await req.json();

  const{userId}=data;

  const appointments=await appointmentModel.find({userId:userId});
  return NextResponse.json({appointments})

}
