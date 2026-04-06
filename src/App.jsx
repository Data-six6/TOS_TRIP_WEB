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
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
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
 const [currentUser, setCurrentUser] = useState(() =>
  JSON.parse(localStorage.getItem("tosTripCurrentUser") || "null")
);
const isAdmin = currentUser?.email === "admin@tostrip.com";
  return (
    <div className="app-shell">
    {location.pathname !== '/login' && 
     location.pathname !== '/signup' && (
      <Navbar planCount={plan.length} planClick={() => setDrawerOpen(true)} />
    )}
      <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/tos"     element={<TOSPage   cards={cards} addToPlan={addToPlan} />} />
          <Route path="/board"   element={<BoardPage plan={plan} onRemove={removeFromPlan} />} />
          <Route path="/swipe"   element={<SwipePage cards={cards} onAddToPlan={addToPlan} />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/login"   element={<LoginPage />} />
          <Route path="/signup"  element={<SignUpPage />} />

          <Route path="/admin/home"        element={isAdmin ? <Home />        : <Navigate to="/login" />} />
          <Route path="/admin/dashboard"   element={isAdmin ? <Dashboard />   : <Navigate to="/login" />} />
          <Route path="/admin/users"       element={isAdmin ? <Users />       : <Navigate to="/login" />} />
          <Route path="/admin/destination" element={isAdmin ? <Destination /> : <Navigate to="/login" />} />
          <Route path="/admin/board"       element={isAdmin ? <Board />       : <Navigate to="/login" />} />
                    
          <Route path="*"        element={<NotFoundPage />} />   
        </Routes>

        {!isAdminRoute && (
          <PlanDrawer
              isOpen={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              plan={plan}
              onRemove={removeFromPlan}
            />
        )}

        {!isAdminRoute &&
         location.pathname !== '/login' &&
         location.pathname !== '/signup' && (
          <Footer />
        )}

    </div>
  );
}
export default App;
