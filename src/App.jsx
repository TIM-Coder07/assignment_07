import { Suspense, useState } from "react";
import "./App.css";
import Card1 from "./Card/Card1";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import TickedCard from "./TickedCard/TickedCard";

import { ToastContainer } from "react-toastify";

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
  const cardPromise = fetchTicketData()
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        {/* NAVBAR part ************ */}
        <Navbar></Navbar>

        {/* HERO CARD part ************ */}
        <div className="">
          <Card1 progressCount={ProgressCount} onProgress={handleProgressClick}></Card1>
        </div>

        {/* ticket hedder */}
        <div className="max-w-[1200px] mx-auto mt-7 font-bold text-[35px]">
          <h1>Customer Tickets</h1>
        </div>

        {/* ticket card  */}
        <Suspense  fallback={<span className="loading loading-bars loading-xl"></span>}>
          <TickedCard cardPromise={cardPromise}></TickedCard>
        </Suspense>

        {/* footer Part  */}
        <Footer></Footer>

        <ToastContainer position="top-right"></ToastContainer>
      </div>
    </>
  );
}

export default App;
