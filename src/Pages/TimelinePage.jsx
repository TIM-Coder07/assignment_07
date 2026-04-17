import React, { useContext } from "react";
import { TimelineContext } from "../Context/TimelineContext";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);

  const typeStyle = {
    Call: "bg-pink-500/10 text-pink-600 border-pink-200",
    Text: "bg-purple-500/10 text-purple-600 border-purple-200",
    Video: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        📜 Timeline Activity
      </h1>

      <div className="relative border-l-2 border-gray-200 pl-6 space-y-6">

        {timeline.map((time) => {
          const style =
            typeStyle[time.type] || "bg-gray-100 text-gray-600";

          return (
            <div
              key={time.id}
              className="relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 hover:-translate-y-1"
            >
              {/* DOT */}
              <div className="absolute -left-3 w-4 h-4 bg-pink-500 rounded-full border-4 border-white"></div>

              {/* IMAGE */}
              <img
                className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-200"
                src={time.img || "https://i.pravatar.cc/150?img=3"}
                alt=""
              />

              {/* CONTENT */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">
                  {time.title}
                </p>
                <p className="text-sm text-gray-500">{time.date}</p>
              </div>

              {/* BADGE */}
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium border ${style}`}
              >
                {time.type}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelinePage;