import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardList from "./component/CardList";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <CardList />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
