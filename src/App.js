import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";



function App() {
  return (
      <BrowserRouter>
          <Navigation />
          <Hero />

      </BrowserRouter>
  );
}

export default App;
