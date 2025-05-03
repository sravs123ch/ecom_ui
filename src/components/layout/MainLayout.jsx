import React from 'react';
import { Outlet } from 'react-router-dom';
import  Sidebar from '../common/Sidebar';
import BottomNavigation from '../common/BottomNavigation';

const MainLayout = () => {
  return (
    // <div className="min-h-screen bg-gray-50">
    //   <Sidebar />
    //   <div className="md:pl-10">
    //     <Outlet />
    //   </div>
    //   <BottomNavigation />
    // </div>
    <div className="flex">
  <Sidebar />
  <div className="flex-1 md:ml-10">
    <Outlet />
  </div>
  <BottomNavigation />
</div>

  );
};

export default MainLayout;
