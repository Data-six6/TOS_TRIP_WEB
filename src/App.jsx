import "./App.css";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BoardPage from "./pages/BoardPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PlannerPage from "./pages/PlannerPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SwipePage from "./pages/SwipePage.jsx";
import TOSPage from "./pages/TOSPage.jsx";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import exploreCards from "./data/exploreCards.js";
function App() {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("exploreCards");
    return saved ? JSON.parse(saved) : exploreCards;
  });
  useEffect(() => {
    localStorage.setItem("exploreCards", JSON.stringify(cards));
  }, [cards]);
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tos" element={<TOSPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/swipe" element={<SwipePage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
