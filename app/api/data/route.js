import { appointmentModel } from "@/models/appointment";
import { URL } from "../../../lib/db";

import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req) {
    await mongoose.connect(URL);
    
    const data = await req.json();
    const { email } = data;

    if (!email) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    try {
        const appointments = await appointmentModel.find({ email });
        return NextResponse.json(appointments); 
    } catch (error) {
        console.error("Database query error:", error);
        return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
    }
}

  