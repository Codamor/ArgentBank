import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Feature from "./Components/Features/Feature";



function App() {
  return (
      <BrowserRouter>
          <Navigation />
          <Hero />
          <Feature>

          </Feature>

      </BrowserRouter>
  );
}

export default App;
