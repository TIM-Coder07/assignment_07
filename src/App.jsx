import { Suspense, useState } from "react";
import "./App.css";
import Card1 from "./Card/Card1";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import TickedCard from "./TickedCard/TickedCard";

const fetchTicketData = async () => {
  const res = await fetch("/TicketData.json")
  return res.json()
};




function App() {
  // progress count 
const [ProgressCount, setProgressCount] = useState(0)

const handleProgressClick = () => {
  setProgressCount(ProgressCount + 1)
}

// fetch promiss handler 
  
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        {/* NAVBAR part ************ */}
        <Navbar></Navbar>

        {/* HERO CARD part ************ */}
        <div className="">
          <Card1 ProgressCount={ProgressCount} onProgress={handleProgressClick}></Card1>
        </div>

        
      </div>
    </>
  );
}

export default App;
