import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context, serverUrl } from '../main';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.post(
        `${serverUrl}/users/logout`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      toast.success('Logged Out Successfully');
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>Todo App</h2>
      </div>
      <article>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        {isAuthenticated ? (
          <button disabled={loading} onClick={logoutHandler} className="btn">
            LogOut
          </button>
        ) : (
          <Link to={'/login'}>Login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
