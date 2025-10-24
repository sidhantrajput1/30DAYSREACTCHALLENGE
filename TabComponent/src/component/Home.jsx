import React, { useState } from "react";

function Home({ user, setUser }) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User submit Successfully");
    setUser(formData);
    setFormData({ name: "", email: "", phone: "" });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          🏠 Home Tab
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-600 font-semibold mb-1 tracking-wide"
            >
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-600 font-semibold mb-1 tracking-wide"
            >
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-gray-600 font-semibold mb-1 tracking-wide"
            >
              Phone
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              type="number"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold py-2.5 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default React.memo(Home);
