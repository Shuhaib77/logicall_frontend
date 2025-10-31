import React, { useState } from "react";
import SideBar from "../../../common/layout/sideBar/SideBar";
import Header from "../../../common/layout/header/Header";
import { Outlet } from "react-router-dom";
import { useGetShowType } from "../../../hooks/nonauth/movies/useMoviesType";

function HomeLayout() {
  const [open, setOpen] = useState(false);
  const SideBardata = [
    {
      name: "Favorites",
      url: "/home/fav-shows",
      icon: "icon",
    },
  ];
  return (
    <>
      <div className="flex w-full h-screen ">
        <div className="hidden sm:block">
          <SideBar SideBardata={SideBardata} />
        </div>
        {open && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div className="absolute left-0 top-0">
              <SideBar SideBardata={SideBardata} setOpen={setOpen} open={open}  />
            </div>
          </div>
        )}
        <div className="w-full flex flex-col   ">
          <div className="">
            <Header setOpen={setOpen} open={open} />
          </div>
          <div className="bg-background-primary h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
