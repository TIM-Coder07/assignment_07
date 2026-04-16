import React, { useContext } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router";
import callImg from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/video.png";
import { TimelineContext } from "../Context/TimelineContext";
const FriendDetailsPage = () => {
  const { id } = useParams();
  const allData = useLoaderData() || [];
  const navigate = useNavigate();

  const { addTimeline } = useContext(TimelineContext);

  const friend = allData.find((item) => item.id === parseInt(id));

  if (!friend) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        Friend not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm font-medium text-pink-600 hover:underline"
      >
        ← Go Back
      </button>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-6 flex flex-col items-center md:w-1/3">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />

          <h2 className="mt-4 text-xl font-bold">{friend.name}</h2>
          <p className="text-sm opacity-90">{friend.email}</p>

          <p className="mt-4 text-xs opacity-90 text-center">{friend.bio}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {friend.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-2 w-full">
            <button className="w-full bg-white text-pink-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              ⏰ Snooze 2 Weeks
            </button>
            <button className="w-full bg-white text-purple-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              📦 Archive
            </button>
            <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition">
              🗑️ Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 flex-1 bg-gray-50">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="text-2xl font-bold text-pink-600">
                {friend.days_since_contact}
              </p>
              <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="text-2xl font-bold text-purple-600">
                {friend.goal}
              </p>
              <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="text-sm font-semibold text-indigo-600">
                {friend.next_due_date}
              </p>
              <p className="text-xs text-gray-500 mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="mt-6 bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-gray-700">Relationship Goal</h4>
              <button className="text-sm text-pink-500 hover:underline">
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Connect every{" "}
              <span className="font-semibold text-pink-600">
                {friend.goal} days
              </span>
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-4 text-gray-700">
              Quick Check-in
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* CALL */}
              <button
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center gap-3 hover:scale-[1.02] duration-200"
                onClick={() =>
                  addTimeline({
                    id: Date.now(),
                    type: "Call",
                    title: `Call with ${friend.name}`,
                    date: new Date().toLocaleDateString(),
                    img:`${friend.picture}`
                  })
                }
              >
                <img
                  src={callImg}
                  alt="Call"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-pink-600 font-medium">Call</span>
              </button>

              {/* TEXT */}
              <button
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center gap-3 hover:scale-[1.02] duration-200"
                onClick={() =>
                  addTimeline({
                    id: Date.now(),
                    type: "Text",
                    title: `Text with ${friend.name}`,
                    date: new Date().toLocaleDateString(),
                    img:`${friend.picture}`
                  })
                }
              >
                <img
                  src={textImg}
                  alt="Text"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-purple-600 font-medium">Text</span>
              </button>

              {/* VIDEO */}
              <button
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center gap-3 hover:scale-[1.02] duration-200"
                onClick={() =>
                  addTimeline({
                    id: Date.now(),
                    type: "Video",
                    title: `Video with ${friend.name}`,
                    date: new Date().toLocaleDateString(),
                    img:`${friend.picture}`
                  })
                }
              >
                <img
                  src={videoImg}
                  alt="Video"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-indigo-600 font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
