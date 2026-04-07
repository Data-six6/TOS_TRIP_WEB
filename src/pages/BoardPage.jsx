import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import board from "../assets/VisionBoard.svg";
import blueStar from "../assets/Star.svg";
import calendar from "../assets/calendar.svg";
import blueFlower from "../assets/blueFlower.svg";
import ball from "../assets/PoolBall.svg";
import bluePocket from "../assets/bluePocket.svg";
import johnPork from "../assets/NameCard.svg";
import CambodiaBoard from "../components/CambodiaBoard";
import "../styles/boardpage.css";

function BoardPage({ plan = [], onRemove }) {
  const limited = plan.slice(0, 5);
  const [removing, setRemoving] = useState(null);
  const [order, setOrder] = useState(() => limited.map((_, i) => i));
  const [dragIndex, setDragIndex] = useState(null);
  const [design, setDesign] = useState(
    () => localStorage.getItem("boardDesign") || "default"
  );

  useEffect(() => {
    setOrder(plan.slice(0, 5).map((_, i) => i));
  }, [plan]);

  // Listen for admin design changes
  useEffect(() => {
    const onStorageChange = () => {
      setDesign(localStorage.getItem("boardDesign") || "default");
    };
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  const handleRemove = (place) => {
    setRemoving(place.title);
    setTimeout(() => {
      onRemove(place);
      setRemoving(null);
    }, 400);
  };

  const handleExport = async () => {
    const boardEl = document.querySelector(".board-wrapper");
    const canvas = await html2canvas(boardEl, {
      useCORS: true,
      allowTaint: true,
      scale: 2,
    });
    const link = document.createElement("a");
    link.download = "my-trip-board.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleDragStart = (index) => setDragIndex(index);

  const handleDrop = (index) => {
    if (dragIndex === null || dragIndex === index) return;
    const newOrder = [...order];
    const [moved] = newOrder.splice(dragIndex, 1);
    newOrder.splice(index, 0, moved);
    setOrder(newOrder);
    setDragIndex(null);
  };

  const orderedPlaces = order
    .filter((i) => i < limited.length)
    .map((i) => limited[i]);

  return (
    <main className="board-main">
      <div className="board-top">
        <button className="btn-export" onClick={handleExport}>
          Export
        </button>
      </div>

      {/* Swap board based on admin's choice */}
      {design === "visionBoard_2" ? (
        <CambodiaBoard
          orderedPlaces={orderedPlaces}
          removing={removing}
          onRemove={handleRemove}
        />
      ) : (
        // ✅ Default board — completely unchanged
        <div className="board-wrapper theme-default">
          <img src={board} className="board" />

          <img src={blueStar}   className="deco deco-star" />
          <img src={bluePocket} className="deco deco-pocket" />
          <img src={ball}       className="deco deco-ball" />
          <img src={calendar}   className="deco deco-calendar" />
          <img src={blueFlower} className="deco deco-flower-1" />
          <img src={blueFlower} className="deco deco-flower-2" />
          <img src={johnPork}   className="deco deco-namecard" />

          {orderedPlaces.length === 0 ? (
            <div className="board-empty">
              <p>Nothing here yet!</p>
              <p>Go to TOS and add up to 5 places ✈️</p>
            </div>
          ) : (
            <div className="board-photos">
              {orderedPlaces.map((place, index) => (
                <div
                  key={place.title}
                  className={`board-photo board-photo--${index} ${
                    removing === place.title ? "removing" : ""
                  }`}
                >
                  <img src={place.image} alt={place.title} />
                  <button
                    className="board-photo__remove"
                    onClick={() => handleRemove(place)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="bottom-strip">
        {orderedPlaces.length === 0 ? (
          <p className="strip-empty">Add places from TOS to see them here!</p>
        ) : (
          orderedPlaces.map((place, index) => (
            <div
              key={place.title}
              className={`place-card ${
                removing === place.title ? "card-removing" : ""
              } ${dragIndex === index ? "dragging" : ""}`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
            >
              <img
                src={place.image}
                className="place-card-img"
                alt={place.title}
              />
              <p className="place-card-name">{place.title}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default BoardPage;