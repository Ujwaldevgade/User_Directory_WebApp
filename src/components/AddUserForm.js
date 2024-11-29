// src/components/AddUserForm.js
import React, { useState } from 'react';

const AddUserForm = () => {
  // State to hold form data and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  // Basic validation function to ensure all fields are filled
  const validateForm = () => {
    if (!name || !email || !phone || !company || !website || !address) {
      setError('All fields are required!');
      return false;
    }
    setError(''); // Clear error if all fields are valid
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!validateForm()) return;

    // Simulate a dummy form submission
    const newUser = { name, email, phone, company, website, address };
    console.log('User added:', newUser); // This is the "dummy submission"

    // Clear form fields after submission (optional)
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setWebsite('');
    setAddress('');
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 mt-10 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New User</h2>

      {/* Display error message if any */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Company Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        {/* Website Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
