import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>User Management App</h1>
        </header>
        <main>
          <Routes>
            {/* Route to display the list of users */}
            <Route path="/" element={<UserList />} />

            {/* Route to add a new user */}
            <Route path="/add" element={<UserForm mode="add" />} />

            {/* Route to edit an existing user */}
            <Route path="/edit/:id" element={<UserForm mode="edit" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
