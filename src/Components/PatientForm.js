import React, { useState, useEffect } from "react";

export default function Patientform() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [patients, setPatients] = useState([]);

  // console.log("What is first name", firstName);

  function handleFirstName(event) {
    // console.log(event.target.value);
    setfirstName(event.target.value);
  }

  function handleLastName(event) {
    // console.log(event.target.value);
    setLastName(event.target.value);
  }

  function handleEmail(event) {
    // console.log(event.target.value);
    setEmail(event.target.value);
  }

  function handlePhone(event) {
    // console.log(event.target.value);
    setPhone(event.target.value);
  }

  function handleGender(event) {
    // console.log(event.target.value);
    setGender(event.target.value);
  }

  function handleDateOfBirth(event) {
    // console.log(event.target.value);
    setDateOfBirth(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const tempArray = [...patients];

    const object = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      dateOfbirth: dateOfBirth
    };
    tempArray.push(object);

    setPatients(tempArray);
  }

  useEffect(() => {
    console.log("patients: ", patients);
  }, [patients]);

  return (
    <form onSubmit={handleFormSubmit}>
      <label>First Name</label>
      <input value={firstName} onChange={handleFirstName} />
      <br />

      <label>Last Name</label>
      <input value={lastName} onChange={handleLastName} />
      <br />
      <label>Email</label>
      <input value={email} onChange={handleEmail} />
      <br />
      <label>Phone</label>
      <input value={phone} onChange={handlePhone} />
      <br />
      <label>Gender</label>
      <input value={gender} onChange={handleGender} />
      <br />
      <label>Date of birth</label>
      <input value={dateOfBirth} onChange={handleDateOfBirth} />
      <br />
      <input type="submit" />
    </form>
  );
}
