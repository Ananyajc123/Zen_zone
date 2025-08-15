import React, { useState } from 'react';

const EditProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated data to the server (implement your backend logic)
    console.log('Updated Profile:', formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="mt-2 block w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 block w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
