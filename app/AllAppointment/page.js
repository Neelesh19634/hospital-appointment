"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";

const AppointmentsPage = () => {
  const { user } = useUser();
  const email = user?.emailAddresses[0].emailAddress;
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
        const res = await fetch(`/api/data`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        
        if (res.ok && Array.isArray(data)) {
            setAppointments(data); // No need to check `data.appointments`
        } else {
            console.error("Invalid response format:", data);
            setAppointments([]); 
        }
    } catch (error) {
        console.error("Error fetching appointments:", error);
        setAppointments([]); 
    }
}

  useEffect(() => {
    if (email) fetchAppointments();
  }, [email]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        All Appointments {}
      </h1>
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div
              key={appointment?.name}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {appointment.name}
              </h2>
              <p className="text-gray-600 text-sm mb-1">{appointment.email}</p>
              <p className="text-gray-700 font-medium mt-2">
                {appointment.department}
              </p>
              <p className="text-gray-600 text-sm">
                {appointment.date} at {appointment.time}
              </p>
              <p className="text-gray-500 mt-3 text-sm">
                {appointment.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No appointments found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
