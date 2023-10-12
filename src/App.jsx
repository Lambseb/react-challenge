// import { useState } from "react";
import data from "./data/data.json";
// import Navbar from "./component/navbar";
// import CardList from "./component/Cardlist";
import Card from "./component/Card";
// import Footer from "./component/footer";

function App() {
 
  return (
    <>
      
      <Card data={data} />
    </>
  );
}
export default App;
