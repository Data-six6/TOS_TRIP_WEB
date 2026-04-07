import { useState, useEffect } from "react";
import "../../styles/admin/dashboard.css";
import exploreCards from "../../data/exploreCards";

function Dashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalDest, setTotalDest] = useState(0);
  const [totalBoard, setTotalBoard] = useState(0);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("tosTripUsers") || "[]");
    const cards = JSON.parse(localStorage.getItem("exploreCards") || "[]");
    const plan  = JSON.parse(localStorage.getItem("savedPlan")    || "[]");
    setTotalUsers(users.length);
    setTotalDest(cards.length || exploreCards.length);
    setTotalBoard(plan.length);
  }, []);

  const popular = [
    { name: "Angkor Wat",   rating: 4.9, planCount: 100 },
    { name: "Kirirom",      rating: 4.4, planCount: 50  },
    { name: "Lazy Beach",   rating: 4.7, planCount: 40  },
  ];

  return (
    <div className="dash-page">
      {/* ── Stat cards ── */}
      <div className="dash-stats">
        <div className="dash-stat">
          <p className="dash-stat__label">Total Users</p>
          <p className="dash-stat__num">{totalUsers}</p>
        </div>
        <div className="dash-stat">
          <p className="dash-stat__label">Total Destination</p>
          <p className="dash-stat__num">{totalDest}</p>
        </div>
        <div className="dash-stat">
          <p className="dash-stat__label">Total Board</p>
          <p className="dash-stat__num">{totalBoard}</p>
        </div>
      </div>

      {/* ── Most Popular ── */}
      <div className="dash-popular">
        <h3 className="dash-popular__title">Most Popular Places!</h3>
        <table className="dash-table">
          <thead>
            <tr>
              <th>Places</th>
              <th>Rating</th>
              <th>Plan Count</th>
            </tr>
          </thead>
          <tbody>
            {popular.map((p, i) => (
              <tr key={p.name}>
                <td>{i + 1}. {p.name}</td>
                <td>{p.rating.toFixed(1)} ★</td>
                <td>{p.planCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;