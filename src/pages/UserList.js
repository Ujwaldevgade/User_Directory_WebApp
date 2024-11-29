import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../components/UserCard';


const UserList = () => {
  const { list, loading, error } = useSelector((state) => state.users);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter users based on the search query
  const filteredUsers = list.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );

  return (
   
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-2xl p-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        {filteredUsers.length === 0 && (
          <p className="text-lg text-gray-500 col-span-full text-center">
            No users found.
          </p>
        )}
      </div>
    </div>
    
  );
};

export default UserList;
