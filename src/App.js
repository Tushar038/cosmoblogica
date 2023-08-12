import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/contact" element={user ? <Contact /> : <Register />} />
        <Route path="/about" element={user ? <About /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
