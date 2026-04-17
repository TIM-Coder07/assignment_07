import React, { useContext, useState } from "react";
import { TimelineContext } from "../Context/TimelineContext";
import { FaPhoneAlt, FaSms, FaVideo } from "react-icons/fa";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  // STYLE MAP
  const typeStyle = {
    Call: "bg-pink-500/10 text-pink-600 border-pink-200",
    Text: "bg-purple-500/10 text-purple-600 border-purple-200",
    Video: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
  };

  // ICON MAP
  const typeIcon = {
    Call: <FaPhoneAlt />,
    Text: <FaSms />,
    Video: <FaVideo />,
  };

  // DOT COLOR MAP
  const dotColor = {
    Call: "border-pink-500 text-pink-500",
    Text: "border-purple-500 text-purple-500",
    Video: "border-indigo-500 text-indigo-500",
  };

  // FILTER LOGIC
  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        📜 Timeline Activity
      </h1>

      {/* FILTER */}
      <div className="flex justify-center mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* TIMELINE */}
      <div className="relative border-l-2 border-gray-200 pl-8 space-y-6">
        {filteredTimeline.map((time) => {
          const style =
            typeStyle[time.type] || "bg-gray-100 text-gray-600 border-gray-200";
          const icon = typeIcon[time.type];
          const dot = dotColor[time.type] || "border-gray-400 text-gray-400";

          return (
            <div
              key={time.id}
              className="relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 hover:-translate-y-1"
            >
              {/* ICON DOT */}
              <div
                className={`absolute -left-4 w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full shadow ${dot}`}
              >
                {icon}
              </div>

              {/* IMAGE */}
              <img
                className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-200"
                src={time.img || "https://i.pravatar.cc/150?img=3"}
                alt="user"
              />

              {/* CONTENT */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{time.title}</p>
                <p className="text-sm text-gray-500">{time.date}</p>
              </div>

              {/* BADGE */}
              <span
                className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium border ${style}`}
              >
                {icon}
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