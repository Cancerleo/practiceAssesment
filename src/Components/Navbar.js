import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <NavLink to="/home" activeClassName="activeNavLink">
          <li>Home</li>
        </NavLink>
        <NavLink to="/doctorschedule" activeClassName="activeNavLink">
          <li>Doctor Schedule</li>
        </NavLink>
        <NavLink to="/patientsignup" activeClassName="activeNavLink">
          <li>Patient Signup</li>
        </NavLink>
        <NavLink to="/patientdatabase" activeClassName="activeNavLink">
          <li>Patient Database</li>
        </NavLink>
      </ul>
    </nav>
  );
}
