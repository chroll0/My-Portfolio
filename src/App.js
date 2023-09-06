import React from "react";
import { Header, SlideNavbar } from "./components";
import AnimatedRoutes from "./containers/AnimatedRoutes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SlideNavbar />
      {/* <Header /> */}
      <AnimatedRoutes />
    </div>
  );
}

export default App;
