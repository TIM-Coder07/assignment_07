import React from "react";
import { useParams, useLoaderData, useNavigate } from "react-router";

const FriendDetailsPage = () => {
  const { id } = useParams();
  const allData = useLoaderData() || [];
  const navigate = useNavigate();

  const friend = allData.find((item) => item.id === parseInt(id));

  if (!friend) {
    return (
      <div className="text-center mt-10 text-red-500">Friend not found</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

  {/* Back Button */}
  <button
    onClick={() => navigate(-1)}
    className="mb-4 text-sm text-pink-500 hover:underline"
  >
    ← Go Back
  </button>

  <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">

    {/* LEFT SIDE */}
    <div className="bg-gray-100 p-6 flex flex-col items-center md:w-1/3">

      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full object-cover"
      />

      <h2 className="mt-3 text-lg font-bold">{friend.name}</h2>
      <p className="text-sm text-gray-500">{friend.email}</p>

      <p className="mt-3 text-xs text-gray-500 italic text-center">
        {friend.bio}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        {friend.tags?.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-gray-300 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="p-6 flex-1">

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-lg font-bold">
            {friend.days_since_contact}
          </p>
          <p className="text-xs text-gray-500">Days Since Contact</p>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <p className="text-lg font-bold">{friend.goal}</p>
          <p className="text-xs text-gray-500">Goal (Days)</p>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <p className="text-sm font-medium">
            {friend.next_due_date}
          </p>
          <p className="text-xs text-gray-500">Next Due</p>
        </div>
      </div>

      {/* Relationship Goal */}
      <div className="mt-4 bg-gray-100 p-4 rounded">
        <h4 className="font-medium text-sm">Relationship Goal</h4>
        <p className="text-sm text-gray-600 mt-1">
          Connect every {friend.goal} days
        </p>
      </div>

      {/* Quick Actions */}
      <div className="mt-4">
        <h4 className="text-sm font-medium mb-2">
          Quick Check-in
        </h4>

        <div className="grid grid-cols-3 gap-3">
          <button className="bg-gray-100 p-3 rounded hover:bg-gray-200 text-sm">
            📞 Call
          </button>
          <button className="bg-gray-100 p-3 rounded hover:bg-gray-200 text-sm">
            💬 Text
          </button>
          <button className="bg-gray-100 p-3 rounded hover:bg-gray-200 text-sm">
            🎥 Video
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
  );
};

export default FriendDetailsPage;
