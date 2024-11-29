import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-5 shadow-lg top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-3xl font-bold tracking-wide uppercase ml-4">
        User Directory
      </Link>
        <div className="space-x-4">
          {/* You can add additional links or actions here */}
          <Link
          to="/"
          className="text-white hover:text-blue-200 transition duration-300"
        >
          Home
        </Link>

         {/* Add User Link */}
         <Link
            to="/AddUserForm"
            className="text-white pr-4 hover:text-blue-200 transition duration-300"
          >
            Add-New-User
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
