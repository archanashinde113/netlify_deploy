import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import ProjectList from './components/projectlist';
import ProjectCounter from './components/projectcounter';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projectlist" element={<ProjectList/>}/>
        <Route path="/projectcounter" element={<ProjectCounter/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
