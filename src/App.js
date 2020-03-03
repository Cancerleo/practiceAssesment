import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import DoctorSchedule from "./Components/DoctorSchedule";
import PatientSignUp from "./Components/PatientSignUp";
import PatientDataBase from "./Components/PatientDataBase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/home" exact component={HomePage} />
              <Route path="/doctorschedule" component={DoctorSchedule} />
              <Route path="/patientsignUp" component={PatientSignUp} />
              <Route path="/patientdatabase" component={PatientDataBase} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
