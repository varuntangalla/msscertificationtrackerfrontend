import "./App.css";
import React, { useState, useEffect } from "react";
import ProfileComponent from "./Components/ProfileHolder/profile.component";
import MyNavbar from "./Components/Navbar/navbar.component";
import Footer from "./Components/Footer/footer.component"; // Import the Footer component
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(require("./assets/employeeList.json"));
  }, []);

  // useEffect(() => {
  //   fetch("/assets/employeeList.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setItems(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

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
          // element={<ActionAreaCard data={items} />
          element={<ProfileComponent data={items} />}
        />
      </Routes>
      {/* <ActionAreaCard data={items} match={{ params: { employeeId: "1221" } }} /> */}
      {/* Replace "1220" with the actual employeeId from the URL */}
      <Footer />
    </div>
  );
}

export default App;
