import React, { useState, useEffect } from "react";

export default function PatientDataBase() {
  console.log("What is patient database?");

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
    );
    console.log(data);

    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      {items.map(item => (
        <p key={item.id}>
          name: {item.firstName} {item.lastName}, Id: {item.id}, Date of birth:{" "}
          {item.dateOfBirth}
        </p>
      ))}
    </div>
  );
}
