import React, { use, useState } from "react";
import AllCards from "../AllCards/AllCards";

const TickedCard = ({ cardPromise }) => {
  const AllTicketData = use(cardPromise);
  const [clickedTitels, setClickCard] = useState([]);

  const cardAddHandler = (title) => {
    // console.log(title);

    if (!clickedTitels.includes(title.title)) {
      setClickCard([...clickedTitels, title]);
    }
  };

  const handleAlert = () => {
    alert(`In-Progress`);
  };

   const handleRemove = (id) => {
    const update = clickedTitels.filter((remv) => remv !== id);
    setClickCard(update)
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-[1200] mx-auto">
      {/* left side div  */}
      <div onClick={handleAlert} className="grid md:grid-cols-2 gap-6 w-full md:w-[70%]">
        {AllTicketData.map((ticket) => (
          <AllCards
            ticket={ticket}
            key={ticket.id}
            cardAddHandler={cardAddHandler}
          ></AllCards>
        ))}
      </div>

      {/* right side div  */}
      <div className="w-full md:w-[20%] bg-amber-200 p-4">
        <div>
          <h1 className="text-lg font-semibold mb-2">Task Status:</h1>
        {
          clickedTitels.map((titles, id) => {
            console.log(titles.title, titles.customer);
            return (
              <div
                key={id}
                className="bg-white p-3 rounded-lg shadow-md mb-3 hover:bg-gray-50 transition-all"
              >
                <h2 className="text-md font-semibold text-gray-800">
                  {titles.title}
                </h2>
                <button onClick={()=>handleRemove()} className="cursor-pointer btn btn-sm border-t-cyan-700">
                  Complite
                </button>
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
  );
};

export default TickedCard;
