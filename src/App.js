import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/userSlice';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddUserForm from './components/AddUserForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
    <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/AddUserForm" element={<AddUserForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
