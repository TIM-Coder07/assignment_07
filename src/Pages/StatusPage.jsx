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

      <div className="w-full max-w-md relative">
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
              fill: "#fff",
            }}
          />
        ) : (
          <div className="h-75 flex flex-col items-center justify-center bg-gray-100 rounded-2xl">
            <p className="text-gray-500 text-lg font-medium">
              No interactions yet
            </p>
            <p className="text-sm text-gray-400">
              Call, Text or Video to see analytics
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;
