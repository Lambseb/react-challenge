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
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <section>
        <CardList />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
