import React, { useState, useEffect } from "react";
import ProfileComponent from "./Components/ProfileHolder/profile.component";
import MyNavbar from "./Components/Navbar/navbar.component";
import Footer from "./Components/Footer/footer.component";
import PageNotFound from "./Components/PageNotFound/pageNotFound.component";
import { Route, Routes } from "react-router-dom";
import db from "./Services/firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import LoadingComponent from "./Components/Loader/loader.component";

function App() {
  const [items, setItems] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "employeeCollection")
        );
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(dataArray);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!dataLoaded) {
    return (
      <div>
        <MyNavbar />
        <LoadingComponent />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route
          path="/employee/:employeeId"
          element={<ProfileComponent data={items} />}
        />
        <Route path="/*" element={<PageNotFound data={"Page Not Found!"} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
