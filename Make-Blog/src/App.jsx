import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { useState } from "react";
import "./App.css";

function App() {
  const [isAuth, setisAuth] = useState(false);
  return (
    <BrowserRouter>
      <NavBar isAuth={isAuth} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<CreatePost />} />
        <Route
          exact
          path="/login"
          element={<Login isAuth={isAuth} setisAuth={setisAuth} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
