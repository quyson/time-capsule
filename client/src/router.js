import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Logout from "./logout";
import Check from "./check";
import Profile from "./profile";
import Navbar from "./navbar";
import Facebook from "./facebook";
import SearchResults from "./searchResults";
import GetOthersPage from "./othersPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/check" element={<Check />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/search/:id" element={<SearchResults />}></Route>
        <Route path="/pages/:id" element={<GetOthersPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
