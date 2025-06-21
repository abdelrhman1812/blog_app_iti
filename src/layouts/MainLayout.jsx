import Navbar from "@/components/shared/NavBar/Navbar";
import LeftSidebar from "@/components/sideBars/left-sidebar";
import RightSidebar from "@/components/sideBars/right-sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/*
      <Outlet /> */}
      <div className="min-h-screen">
        <div className="mx-auto max-w-[1320px]  px-2 sm:px-4">
          <div className="flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="hidden lg:block md:w-1/4 lg:w-1/5 pr-4 sticky top-16 h-[calc(100vh-4rem)]">
              <LeftSidebar />
            </div>

            {/* Main Content */}
            <div className="w-full   lg:w-3/5 py-6">
              {/* Create Post Form */}
              <Outlet />
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block md:w-1/4 lg:w-1/5 pl-4 sticky top-16 h-[calc(100vh-4rem)]">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
