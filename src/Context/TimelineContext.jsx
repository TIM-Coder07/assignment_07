import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addTimeline = (entry) => {
    setTimeline((prevArr) => [entry, ...prevArr]);
  };

  const contextValue = { timeline, addTimeline };

  return (
    <TimelineContext.Provider value={contextValue}>
      {children}
    </TimelineContext.Provider>
  );
};