import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addTimeline = (entry) => {
    setTimeline((prevArr) => [entry, ...prevArr]);
  };

  const contextValue = { timeline, addTimeline, isLoading, setIsLoading };

  return (
    <TimelineContext.Provider value={contextValue}>
      {children}
    </TimelineContext.Provider>
  );
};
