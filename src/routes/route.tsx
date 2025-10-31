import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import HomeLayout from "../pages/nonauth/home/HomeLayout";
import FavShowCollection from "../pages/nonauth/favShowCollection/FavShowCollection";
import AddNewFavShows from "../pages/nonauth/favShowCollection/common/layout/AddNewFavShows";
import Modal from "../common/components/Modal/Modal";

function UserRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<HomeLayout />}>
          <Route path="fav-shows" element={<FavShowCollection />}>
            <Route path="modal" element={<Modal />}>
              <Route path="add-fav-show/:id" element={<AddNewFavShows />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default UserRoute;
