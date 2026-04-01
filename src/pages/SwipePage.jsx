import React, { useState } from "react";
import SwipeVenture from "../components/swipeCard";

function SwipePage() {
  const [cards] = useState(() => {
    const saved = localStorage.getItem("exploreCards");
    return saved ? JSON.parse(saved) : [];
  });
  return <main><SwipeVenture cards={cards} /></main>;
}

export default SwipePage;