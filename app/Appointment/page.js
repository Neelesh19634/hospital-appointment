"use client"
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const Appointment = () => {
    const { user } = useUser();
    const [data, setData] = useState({
        name: user?.firstName + " " + user?.lastName || "",
        email: user?.emailAddresses?.[0]?.emailAddress || "",
        id: user?.id || "",
        department: '',
        date: '',
        time: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/Appointment", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            const responseData = await res.json();
            
            if (res.ok) {
                setData({
                    name: user?.firstName + " " + user?.lastName || "",
                    email: user?.emailAddresses?.[0]?.emailAddress || "",
                    id: user?.id || "",
                    department: '',
                    date: '',
                    time: '',
                    description: '',
                });
                alert("Form submitted successfully");
            }
        } catch (error) {
            alert("Error submitting form");
            console.error("Form submission error:", error);
        }
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="max-w-xl mx-auto p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#274760] text-center mb-6">
                Book an Appointment
            </h1>
            <form className="bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-300 rounded-2xl px-8 pt-6 pb-8 space-y-6" onSubmit={(e)=>{
                handleSubmit(e);
            }}>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="department">
                        Select Department
                    </label>
                    <select id="department" name="department" value={data.department} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3">
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Orthopedics</option>
                        <option>Pediatrics</option>
                        <option>Dermatology</option>
                        <option>Psychiatry</option>
                        <option>Emergency</option>
                        <option>Gynecology</option>
                        <option>General Medicine</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="date">
                        Appointment Date
                    </label>
                    <input type="date" id="date" name="date" value={data.date} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="time">
                        Appointment Time
                    </label>
                    <input type="time" id="time" name="time" value={data.time} onChange={handleChange} min="09:00" max="14:00" required className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3" />
                    <p className="text-xs text-gray-500 mt-1">Available slots: 9:00 AM - 2:00 PM</p>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="notes">
                        Additional Notes
                    </label>
                    <textarea id="notes" name="description" value={data.description} onChange={handleChange} rows="4" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3" placeholder="Write any special requests or symptoms..."></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Book Appointment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Appointment;