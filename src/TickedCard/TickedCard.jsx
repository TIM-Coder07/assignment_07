import React, { use, useState } from "react";
import AllCards from "../AllCards/AllCards";
import { toast } from "react-toastify";

const TickedCard = ({ cardPromise }) => {
  const AllTicketData = use(cardPromise);

  const [tickets, setTickets] = useState(AllTicketData);

  const cardAddHandler = (ticket) => {
    // status update
    const updatedTickets = tickets.map((task) =>
      task.id === ticket.id ? { ...task, status: "In-Progress" } : task
    );
    setTickets(updatedTickets);
    toast.info(`${ticket.title} is now In-Progress`);
  };

  const handleComplete = (id) => {
    const updatedTickets = tickets.map((t) =>
      t.id === id ? { ...t, status: "Completed" } : t
    );
    setTickets(updatedTickets);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-[1200px] mx-auto">
      {/* left side div */}
      <div className="grid md:grid-cols-2 gap-6 w-full md:w-[70%]">
        {tickets.map((ticket) => (
          <AllCards
            ticket={ticket}
            key={ticket.id}
            cardAddHandler={cardAddHandler}
          />
        ))}
      </div>

      {/* right side div */}
      <div className="w-full md:w-[20%] bg-amber-200 p-4">
        <div>
          <h1 className="text-lg font-semibold mb-2">Task Status:</h1>
          {tickets
            .filter((r) => r.status === "In-Progress")
            .map((r) => (
              <div
                key={r.id}
                className="bg-white p-3 rounded-lg shadow-md mb-3 hover:bg-gray-50 transition-all"
              >
                <h2 className="text-md font-semibold text-gray-800">
                  {r.title}
                </h2>
                <button className="btn btn-sm" onClick={() => handleComplete(r.id)}>Complite</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TickedCard;
