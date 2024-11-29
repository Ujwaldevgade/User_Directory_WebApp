import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.list.find((u) => u.id === parseInt(id)));

  if (!user) return <p className="text-center text-xl font-semibold text-red-500 mt-6">User not found</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-xl p-6 mt-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{user.name}</h1>
        
        {/* User Information */}
        <div className="space-y-4 text-lg text-gray-700">
          {/* Email */}
          <p className="flex items-center">
            <span className="inline-block w-5 h-5 mr-2 text-blue-500">📧</span>
            <span className="font-semibold mr-2">Email:</span> {user.email}
          </p>

          {/* Phone */}
          <p className="flex items-center">
            <span className="inline-block w-5 h-5 mr-2 text-green-500">📞</span>
            <span className="font-semibold mr-2">Phone:</span> {user.phone}
          </p>

          {/* Website */}
          <p className="flex items-center">
            <span className="inline-block w-5 h-5 mr-2 text-gray-500">🌐</span>
            <span className="font-semibold mr-2">Website:</span> {user.website}
          </p>

          {/* Company */}
          <p className="flex items-center">
            <span className="inline-block w-5 h-5 mr-2 text-orange-500">🏢</span>
            <span className="font-semibold mr-2">Company:</span> {user.company.name}
          </p>

          {/* Address */}
          <p className="flex items-center">
            <span className="inline-block w-5 h-5 mr-2 text-gray-700">🏠</span>
            <span className="font-semibold mr-2">Address:</span> {`${user.address.street}, ${user.address.city}`}
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <a
            href="/"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Back to User Directory
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
