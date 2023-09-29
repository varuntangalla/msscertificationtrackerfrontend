import "./App.css";
import React, { useState, useEffect } from "react";
import ActionAreaCard from "./Components/CardComponent/card.component";
import MyNavbar from "./Components/Navbar/navbar.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [items, setItems] = useState([
    {
      employeeId: 1220,
      name: "Rajesh",
      isActive: true,
      certifications: [
        {
          certId: "C1234",
          name: "Security Assesment",
          completedOn: "2023-09-29T15:24:49.874Z",
        },
      ],
    },
    {
      employeeId: 1221,
      name: "Kamal",
      isActive: true,
      certifications: [
        {
          certId: "C1234",
          name: "AWS",
          completedOn: "2023-09-29T15:24:49.874Z",
        },
      ],
    },
    {
      employeeId: 1223,
      name: "Parag",
      isActive: true,
      certifications: [
        {
          certId: "C1234",
          name: "Azure",
          completedOn: "2023-09-29T15:24:49.874Z",
        },
      ],
    },
  ]);

  useEffect(() => {
    fetch("/assets/employeeList.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MyNavbar />
      {/* Render the dynamic card component with the specific employeeId from the URL */}
      <Routes>
        {/* Route to handle dynamic employeeId from the URL */}
        <Route
          path="/employee/:employeeId"
          element={<ActionAreaCard data={items} />}
        />
      </Routes>
      {/* <ActionAreaCard data={items} match={{ params: { employeeId: "1221" } }} /> */}
      {/* Replace "1220" with the actual employeeId from the URL */}
    </div>
  );
}

export default App;
