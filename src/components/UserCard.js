import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Link
      to={`/user/${user.id}`} // Navigate to user details page
      className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200"
    >
      {/* User Name */}
      <p className="text-sm text-gray-700 mt-2 flex items-center">
        <span className="inline-block w-5 h-5 mr-2 text-gray-500">👤</span>
        <span className="text-lg font-medium text-gray-900">Name:</span>
        <span className="ml-2 text-lg text-gray-900">{user.name}</span>
      </p>
  
      {/* User Email */}
      <p className="text-lg text-gray-700 mt-2 flex items-center">
        <span className="inline-block w-5 h-5 mr-2 text-blue-500">📧</span>
        <span className="text-gray-900 font-medium mr-2">Email:</span> {user.email}
      </p>
  
      {/* User Phone */}
      <p className="text-lg text-gray-700 mt-2 flex items-center">
        <span className="inline-block w-5 h-5 mr-2 text-green-500">📞</span>
        <span className="text-gray-900 font-medium mr-2">Phone:</span> {user.phone}
      </p>
  
      {/* Company Name */}
      <p className="text-lg text-gray-700 mt-2 flex items-center">
        <span className="inline-block w-5 h-5 mr-2 text-orange-500">🏢</span>
        <span className="text-gray-900 font-medium mr-2">Company:</span> {user.company.name}
      </p>
  
      {/* View Details Button */}
      <div className="mt-6 inline-block px-3 py-1.5 text-lg font-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
        View Details
      </div>
    </Link>
  );
  
};

export default UserCard;
