import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout actions (clear user state, etc.)
    onLogout();

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
