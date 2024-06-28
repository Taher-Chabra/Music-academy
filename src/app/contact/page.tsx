"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    if (!name && !email && !message) return;

    console.log(name, email);
    console.log(message);
  };

  return (
    <div className="min-h-screen w-full dark:bg-slate-900 bg-slate-400 flex justify-center items-center">
      <div className="w-[35rem] m-2 p-2 mt-28 sm:mt-10">
        <form
          onSubmit={handleSubmit}
          className="h-auto flex flex-col justify-between"
        >
          <label htmlFor="name" className="form-label">Name:</label>
          <input 
          type="text" 
          id="name"
          placeholder="Enter your name..."
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-input h-8 mb-5"
           />

          <label htmlFor="emial" className="form-label">Email:</label>
          <input 
          type="text" 
          id="email"
          placeholder="Enter your email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="form-input h-8 mb-5"
          />

          <label htmlFor="message" className="form-label">Message:</label>
          <textarea  
          id="message"
          placeholder="Enter your message..."
          rows={5}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="form-input"
          />

          <button 
          type="submit"
          className="dark:bg-sky-500 bg-teal-900 hover:dark:bg-sky-700 hover:bg-teal-800 mt-6 px-5 py-1 rounded-2xl mx-auto w-fit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
