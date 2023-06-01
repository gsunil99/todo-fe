import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/app.scss';
import { createContext } from 'react';

export const serverUrl = 'https://nodejs-todoapp-f2j7.onrender.com/api/v1';
export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper></AppWrapper>
  </React.StrictMode>
);
