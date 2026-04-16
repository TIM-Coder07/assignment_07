import React, { useContext } from "react";
import { TimelineContext } from "../Context/TimelineContext";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  console.log(timeline);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">📜 Timeline</h1>

      <div className="space-y-5">
        {timeline.map((time) => {
          const color =
            time.type === "Call"
              ? "bg-pink-100 text-pink-600"
              : time.type === "Text"
                ? "bg-purple-100 text-purple-600"
                : time.type === "Video"
                  ? "bg-indigo-100 text-indigo-600"
                  : "bg-gray-100 text-gray-600";

          return (
            <div
              key={time.id}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-4"
            >
              {/* Image */}
              <img
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                src={time.img || "https://i.pravatar.cc/150?img=3"}
                alt=""
              />

              {/* Content */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{time.title}</p>
                <p className="text-sm text-gray-500">{time.date}</p>
              </div>

              {/* Type Badge */}
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${color}`}
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
