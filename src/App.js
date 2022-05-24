import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { gapi } from "gapi-script";

function App() {
  gapi.load("auth2", () => {
    gapi.auth2.init({
      client_id:
        "538407433450-f7f2ne5udcnsga3tncfmbeuciq7e8itl.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/userinfo.profile",
    });
  });

  return (
    <Routes className="text-3xl font-bold underline">
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
