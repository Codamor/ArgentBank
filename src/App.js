import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Feature from "./Components/Features/Feature";
import Item from "./Components/Item/Item";

import chatIcon from "./assets/img/icon-chat.png";
import moneyIcon from "./assets/img/icon-money.png" ;
import securityIcon from "./assets/img/icon-security.png" ;



function App() {
  return (
      <BrowserRouter>
          <Navigation />
          <Hero />
          <Feature>
              <Item
                  icon={chatIcon}
                  title={"You are our #1 priority"}
                  text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "}
              />
              <Item
                  icon={moneyIcon}
                  title={"More savings means higher rates"}
                  text={" The more you save with us, the higher your interest rate will be! "}
              />
              <Item
                  icon={securityIcon}
                  title={"Security you can trust"}
                  text={"We use top of the line encryption to make sure your data and money is always safe. "}
              />

          </Feature>

      </BrowserRouter>
  );
}

export default App;
