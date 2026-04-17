import React, { useContext } from "react";
import Header from "../Component/Header";
import { Outlet, useNavigation } from "react-router";
import FooterPage from "../Pages/FooterPage";
import { ToastContainer } from "react-toastify";
import { TimelineContext } from "../Context/TimelineContext";
import Loader from "../Component/Loader";

const HomeLAyout = () => {
  const {isLoading} = useContext(TimelineContext)
  const navigation = useNavigation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Loadding  */}
      {isLoading && <Loader></Loader>}


      {/* Header */}
      <Header />
      <div>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
      {/* Main Content */}
      <main className="flex-1">
        {navigation.state === "loading" ? <Loader></Loader> : <Outlet />}
      </main>

      {/* Footer */}
      <FooterPage />
    </div>
  );
};

export default HomeLAyout;
