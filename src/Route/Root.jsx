import { createBrowserRouter } from "react-router";
import HomeLAyout from "../LayOut/HomeLAyout";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import TimelinePage from "../Pages/TimelinePage";
import StatusPage from "../Pages/StatusPage";
import FriendDetailsPage from "../Pages/FriendDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLAyout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => fetch("friendsData.json"),
      },
      {
        path: "/friend/:id",
        Component: FriendDetailsPage,
        loader: () => fetch("friendsData.json"),
      },
      {
        path: "/timeline",
        Component: TimelinePage,
      },
      {
        path: "/status",
        Component: StatusPage,
      },
    ],
  },
]);

export default router;
