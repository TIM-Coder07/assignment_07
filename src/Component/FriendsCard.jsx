import React from "react";
import { NavLink } from "react-router";

const FriendsCard = ({ data }) => {
  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    next_due_date,
  } = data;

  // 🎨 Status color logic
  const statusColor =
    status === "overdue"
      ? "bg-red-100 text-red-600"
      : status === "on track"
        ? "bg-green-100 text-green-600"
        : "bg-yellow-100 text-yellow-600";

  return (
    <div className="bg-base-200 rounded-xl shadow-md p-4 hover:shadow-lg transition">
      {/* Top Section */}
      <div className="flex items-center gap-3">
        <img
          src={picture}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 mt-3">{bio}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-300 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Info */}
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>📅 Last Contact: {days_since_contact} days ago</p>
        <p>⏰ Next Due: {next_due_date}</p>
      </div>

      {/* Status */}
      <div className="mt-4 flex items-center justify-between">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor}`}
        >
          {status}
        </span>

        <NavLink
          to={`/friend/${data.id}`}
          className="text-sm text-pink-500 hover:underline"
        >
          View
        </NavLink>
      </div>
    </div>
  );
};

export default FriendsCard;
