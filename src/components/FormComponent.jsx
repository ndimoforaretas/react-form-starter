import React, { useState } from "react";

const FormComponent = () => {
  // Initial form data
  const initialFormData = {
    firstName: "",
    lastName: "",
    favoriteLanguage: "",
    isStudent: false,
  };
  // State to store the form data
  const [formData, setFormData] = useState(initialFormData);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form Data:", formData);

    setFormData(initialFormData); // Reset form data
  };

  return (
    <div className="container w-[50%] border-2 rounded-2xl shadow-lg shadow-cyan-400 ">
      <h2 className="text-3xl font-bold text-yellow-200 mb-4 p-4">
        Simple React Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 p-8">
        <div>
          <label
            htmlFor="firstName"
            className="block text-lg font-medium text-lime-400 pb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-1sm:text-sm"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-lg font-medium  text-lime-400 pb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-1 sm:text-sm"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="favoriteLanguage"
            className="block text-lg font-medium  text-lime-400 pb-2">
            Favorite Coding Language
          </label>
          <select
            name="favoriteLanguage"
            id="favoriteLanguage"
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-yellow-200 sm:text-sm rounded-md"
            value={formData.favoriteLanguage}
            onChange={handleChange}>
            <option value="">Select a Language</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C#">C#</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isStudent"
            id="isStudent"
            required
            className="h-4 w-4 text-indigo-600  border-gray-300 rounded"
            checked={formData.isStudent}
            onChange={handleChange}
          />
          <label
            htmlFor="isStudent"
            className="ml-2 block text-lg font-medium  text-lime-400 pb-2">
            Is Student
          </label>
        </div>
        <button
          type="submit"
          className="py-2 px-4 text-slate-900 bg-yellow-200 font-bold rounded-md hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
