import React, { useState } from 'react';
import axios from 'axios';
import logo from './image/Logo.svg';
import Dashboard from './image/Dashboard.svg';
import projectlist from './image/Project-list.svg';
import createprojectactive from './image/create-project-active.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import logout from './image/Logout.svg';



const AddProject = () => {
  const [projectName, setProjectName] = useState('');
  const [Reason, setReason] = useState('For Business');
  const [Type, setType] = useState('Internal');
  const [Division, setDivision] = useState('');
  const [Category, setCategory] = useState('Quality A');
  const [Priority, setPriority] = useState('High');
  const [Department, setDepartment] = useState('Statergy');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [Location, setLocation] = useState('Pune');
  const [error, setError] = useState('');

  const projectlistclick = () => {
    navigate('/projectlist')
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const projectcounterclick = () => {
    navigate('/projectcounter')
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate inputs
    if (!projectName || !Reason || !Type || !Division || !Category || !Priority || !Department || !startDate || !endDate || !Location) {
      setError('Please fill in all fields');
      return;
    }
    if (endDate < startDate) {
      setError('End date cannot be earlier than start date');
      return;
    }

    try {
      const projectData = {
        projectName,
        Reason,
        Type,
        Division,
        Category,
        Priority,
        Department,
        startDate,
        endDate,
        Location,
        Status: 'default',
      };

      await axios.post('https://netlify-backend-2.onrender.com/api/projects', projectData);
      console.log("added project successfully");
      navigate('/projectlist');
    } catch (err) {
      setError('Failed to add project');
    }
  };

  return (
    <div className="container-fluid">

      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-1">
            <div className="img-proj">
              <img src={Dashboard} alt="Dashboard" className="img-proj1" style={{ cursor: 'pointer' }} onClick={projectcounterclick} />
              <img src={projectlist} alt="projectlist" className="img-proj1" style={{ cursor: 'pointer' }} onClick={projectlistclick} />
              <img src={createprojectactive} alt="createproject" style={{ cursor: 'pointer' }} className="img-proj1" />
              <img src={logout} alt="logout" className="img-proj1" style={{ cursor: 'pointer' }} onClick={handleLogout} />
            </div>
          </div>
          <div className="col-md-11 headerbg">
            <div className='logoimg1'>
              <h6 className='text-white left-text'>Create Project</h6>
              <img src={logo} alt="logo" className='center-image my-3' />
            </div>
            <Card className='dashbg'>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    htmlFor="projectName"
                    type="text"
                    className="form-control"
                    placeholder='Enter Project Theme'
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <button type="submit" className="btn btn-primary">Save Project</button>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">

                  <label htmlFor="Reason" className="form-label">Reason
                    <select
                      className="form-select"
                      id="Reason"
                      value={Reason}
                      onChange={(e) => setReason(e.target.value)}
                      required
                    >
                      <option value="For Business">For Business</option>
                      <option value="For Marketing">For Marketing</option>
                    </select>
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="Type" className="form-label">Type
                    <select
                      className="form-select"
                      id="Type"
                      value={Type}
                      onChange={(e) => setType(e.target.value)}
                      required
                    >
                      <option value="Internal">Internal</option>
                      <option value="External">External</option>
                    </select>
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="Division" className="form-label">Division
                    <select
                      className="form-select"
                      id="Division"
                      value={Division}
                      onChange={(e) => setDivision(e.target.value)}
                      required
                    >
                      <option value="Filters">Filters</option>
                      <option value="Banking">Banking</option>
                      <option value="IT">IT</option>
                      <option value="Non-IT">Non-IT</option>
                      <option value="Finance">Finance</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="Category" className="form-label">Category
                    <select
                      className="form-select"
                      id="Category"
                      value={Category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="Quality A">Quality A</option>
                      <option value="Software Developer">Software Developer</option>
                      <option value="FrontEnd">FrontEnd</option>
                      <option value="BackEnd">BackEnd</option>
                    </select>
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="Priority" className="form-label">Priority
                    <select
                      className="form-select"
                      id="Priority"
                      value={Priority}
                      onChange={(e) => setPriority(e.target.value)}
                      required
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="Department" className="form-label">Department
                    <select
                      className="form-select"
                      id="Department"
                      value={Department}
                      onChange={(e) => setDepartment(e.target.value)}
                      required
                    >
                      <option value="">Statergy</option>
                      <option value="Banking">Banking</option>
                      <option value="Finance">Finance</option>
                      <option value="Quality">Quality</option>
                      <option value="Non-IT">Non-IT</option>
                      <option value="HR">HR</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="startDate" className="form-label">Start Date as per project plan
                    <input
                      type="date"
                      selected={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      dateformat="yyyy/mm/dd"
                      className="form-control"
                      id="startDate"
                      required
                    />
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="endDate" className="form-label">End Date as per project plan
                    <input
                      type="date"
                      selected={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      dateformat="yyyy/mm/dd"
                      className="form-control"
                      id="endDate"
                      required
                    />
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="Location" className="form-label">Location
                    <select
                      className="form-select"
                      id="Location"
                      value={Location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    >
                      <option value="Pune">Pune</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </label>
                  <h6 className='mt-4'>Status: <b>Registered</b></h6>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </form >
    </div >
  );
};

export default AddProject;
