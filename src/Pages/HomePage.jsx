import React from "react";
import FriendsList from "../Component/FriendsList";
import Loader from "../Component/Loader";

const HomePage = () => {

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 md:p-10 rounded-xl shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold">
          Friends to keep close in your life
        </h3>

        <p className="mt-2 text-sm md:text-base text-white/90">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-5 bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
          <span className="font-bold">+</span> Add a Friend
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-base-200 p-5 rounded-xl shadow">
          <h4 className="text-gray-500 text-sm">Total Friends</h4>
          <p className="text-2xl font-bold mt-1">10</p>
        </div>

        <div className="bg-base-200 p-5 rounded-xl shadow">
          <h4 className="text-gray-500 text-sm">On Track</h4>
          <p className="text-2xl font-bold mt-1">8</p>
        </div>

        <div className="bg-base-200 p-5 rounded-xl shadow">
          <h4 className="text-gray-500 text-sm">Need Attention</h4>
          <p className="text-2xl font-bold mt-1">4</p>
        </div>

        <div className="bg-base-200 p-5 rounded-xl shadow">
          <h4 className="text-gray-500 text-sm">Interactions This Month</h4>
          <p className="text-2xl font-bold mt-1">18</p>
        </div>
      </div>

      {/* Friends List */}
      <div className="mt-10">
        <FriendsList></FriendsList>
      </div>
    </div>
  );
};

export default HomePage;
