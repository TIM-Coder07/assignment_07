import React from "react";

const AllCards = ({ ticket, cardAddHandler }) => {
  return (
    <div>
      <div className="mt-8 ">
        <div className="card cursor-pointer bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition" onClick={() => cardAddHandler(ticket)}>

          {/* Header**** */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {ticket.title}
            </h3>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                ticket.status === "Open"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {ticket.status}
            </span>
          </div>

          {/* Description *****/}
          <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 border border-gray-200 rounded-lg p-3">
            {ticket.description}
          </p>

              {/* activity **** */}
          <div className="flex justify-between text-sm font-medium text-gray-700 mt-4">
            <h5>#{ticket.id}</h5>
            <h5
              className={`${
                ticket.priority === "HIGH PRIORITY"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {ticket.priority}
            </h5>
            <h5>{ticket.customer}</h5>
            <h5>{ticket.createdAt}</h5>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AllCards;
