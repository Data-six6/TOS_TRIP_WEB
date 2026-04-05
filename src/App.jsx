import "./App.css";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BoardPage from "./pages/BoardPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PlannerPage from "./pages/PlannerPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SwipePage from "./pages/SwipePage.jsx";
import TOSPage from "./pages/TOSPage.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import exploreCards from "./data/exploreCards.js";
import PlanDrawer from "./components/Alert.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/HomePage.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Users from "./pages/admin/UserManagement.jsx";
import Destination from "./pages/admin/Destination.jsx";
import Board from "./pages/admin/TravelBoard.jsx";
function App() {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("exploreCards");
    return saved ? JSON.parse(saved) : exploreCards;
  });

  const [plan, setPlan] = useState(() => {
    const saved = localStorage.getItem("savedPlan");
    return saved ? JSON.parse(saved) : [];
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("exploreCards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("savedPlan", JSON.stringify(plan));
  }, [plan]);

  const addToPlan = (item) => {
    setPlan((prev) => {
      if (prev.some((x) => x.title === item.title)) return prev;
      setDrawerOpen(true); //  auto open drawer when adding
      return [...prev, item];
    });
  };

  const removeFromPlan = (item) => {
    setPlan((prev) => prev.filter((x) => x.title !== item.title));
  };
  const currentUser = JSON.parse(localStorage.getItem("tosTripCurrentUser" || "null"));
  const isAdmin = currentUser?.role==="admin";
  return (
    <div className="app-shell">
      <Navbar planCount={plan.length} planClick={() => setDrawerOpen(true)} />
      <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/tos"     element={<TOSPage   cards={cards} addToPlan={addToPlan} />} />
          <Route path="/board"   element={<BoardPage plan={plan} onRemove={removeFromPlan} />} />
          <Route path="/swipe"   element={<SwipePage cards={cards} onAddToPlan={addToPlan} />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/login"   element={<LoginPage />} />
          <Route path="/signup"  element={<SignUpPage />} />

          {
            isAdmin && (
              <>
                <Route path="/admin/home" element={<Home />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/destination" element={<Destination />} />
                <Route path="/admin/board" element={<Board />} />
              </>
            )
          }
          

          <Route path="*"        element={<NotFoundPage />} />   
        </Routes>
        <PlanDrawer
            isOpen={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            plan={plan}
            onRemove={removeFromPlan}
          />
        <Footer />
    </div>
  );
}
export default App;
