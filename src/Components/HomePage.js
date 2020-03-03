import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function HomePage() {
  console.log("Is homepage working?");
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <Contact />
      <Link to="/doctorschedule">
        <button>Who is on duty ?</button>
      </Link>
      <Link to="/patientsignup">
        <button>I am a new patient</button>
      </Link>
    </div>
  );
}
