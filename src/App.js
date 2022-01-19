import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import UserPage from "./Pages/UserPage/UserPage";
import {Provider} from "react-redux";
import {store} from "./store/store";



function App() {
  return (
      <Provider store={store} >
          <BrowserRouter>
              <Navigation />

              <Switch>
                  <Route exact path="/" component={HomePage } />
                  <Route path="/signin" component={SignInPage } />
                  <Route path="/profile" component={UserPage } />
              </Switch>

              <Footer text={"Copyright 2022 Argent Bank"} />

          </BrowserRouter>
      </Provider>

  );
}

export default App;
