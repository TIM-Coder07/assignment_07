import React, { useContext } from "react";
import { TimelineContext } from "../Context/TimelineContext";
import { PieChart } from "react-minimal-pie-chart";

const StatusPage = () => {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter((item) => item.type === "Call").length;
  const textCount = timeline.filter((item) => item.type === "Text").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;

  const data = [
    { title: "Call", value: callCount, color: "#ec4899" },
    { title: "Text", value: textCount, color: "#a855f7" },
    { title: "Video", value: videoCount, color: "#6366f1" },
  ];

  const hasData = callCount || textCount || videoCount;

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-2xl font-bold mb-8 text-center">
        📊 Friendship Analytics
      </h1>

      <div className="w-full max-w-md">
        {/* PIE CHART */}
        {hasData ? (
          <PieChart
            data={data}
            lineWidth={35}
            paddingAngle={2}
            animate
            label={({ dataEntry }) =>
              dataEntry.value > 0 ? `${Math.round(dataEntry.percentage)}%` : ""
            }
            labelStyle={{
              fontSize: "6px",
              fill: "black",
            }}
          />
        ) : (
          <div className="h-60 flex flex-col items-center justify-center bg-gray-100 rounded-2xl">
            <p className="text-gray-500 text-lg font-medium">
              No interactions yet
            </p>
            <p className="text-sm text-gray-400">
              Call, Text or Video to see analytics
            </p>
          </div>
        )}

        {/* LEGEND */}
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-pink-500"></span>
            <p className="text-gray-700 text-sm">
              Call (Pink) — Voice conversations
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-purple-500"></span>
            <p className="text-gray-700 text-sm">
              Text (Purple) — Messages and chats
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-indigo-500"></span>
            <p className="text-gray-700 text-sm">
              Video (Indigo) — Video calls
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
