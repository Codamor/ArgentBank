import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import UserPage from "./Pages/UserPage/UserPage";



function App() {
  return (
      <BrowserRouter>
          <Navigation />

          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/user" element={<UserPage />} />
          </Routes>

          <Footer text={"Copyright 2022 Argent Bank"} />

      </BrowserRouter>
  );
}

export default App;
