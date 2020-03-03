import React, { useState, useEffect } from "react";
import Contact from "./Contact";

export default function DoctorOnduty() {
  console.log("What is doctor schedule?");

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );

    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      <h1>Who is on duty?</h1>
      <table>
        <tbody>
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>

          {items.map(item => (
            <tr key={item.id}>
              <td>{item.doctor}</td>
              <td>{item.onDuty ? "on duty" : "off duty"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Contact />
    </div>
  );
}
