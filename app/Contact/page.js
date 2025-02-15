"use client";

import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] =useState({
    name:"",
    email:"",
    phone:"",
    message:""
  })

  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/Contacts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const responseData = await res.json(); 
  
      if (res.ok) {
        console.log(responseData);
        alert("Form submitted successfully");
        setData({ name: "", email: "", phone: "", message: "" }); // Clear form after submission
      } else {
        alert(responseData.message || "Network error"); // Show API error message if available
      }
    } catch (error) {
      alert("Error submitting form");
      console.error("Form submission error:", error);
    }finally{
      setLoading(false);
    }
  };
  

  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <section className="bg-gray-50 py-16 h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              We are fully independent and provide honest recommendations tailored for you.
            </p>
            <div className="mt-6">
              <a href="#" className="text-2xl font-semibold text-pink-600">0151 475 4450</a>
              <address className="mt-2 text-gray-700 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="w-full rounded-md border border-gray-300 p-4 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder:text-zinc-400 placeholder:font-semibold"
                  placeholder="Your Name"
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-md border border-gray-300 p-4 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none  placeholder:text-zinc-400 placeholder:font-semibold"
                    placeholder="Your Email"
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className="w-full rounded-md border border-gray-300 p-4 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none  placeholder:text-zinc-400 placeholder:font-semibold"
                    placeholder="Your Phone"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

             
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  className="w-full rounded-md border border-gray-300 p-4 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none  placeholder:text-zinc-400 placeholder:font-semibold"
                  placeholder="Your Message"
                  rows="6"
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-pink-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-pink-700 sm:w-auto"
                >
                {
                  loading?(<p className="transition animate-spin"><Loader/></p>):(
                    <p> Send Enquiry</p>
                  )
                }
                 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;