import React from "react";
import { useLoaderData } from "react-router";
import FriendsCard from "../Component/FriendsCard";

const FriendsList = () => {
  const allData = useLoaderData();
  console.log(allData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
      {allData?.map((data) => (
        <FriendsCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default FriendsList;
