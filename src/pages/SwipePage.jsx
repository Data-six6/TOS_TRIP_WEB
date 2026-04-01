import React, { useState } from "react";
import SwipeVenture from "../components/swipeCard";
import { useSearchParams } from "react-router-dom";
function SwipePage() {
  const [searchParams] = useSearchParams();
  const startIndex = parseInt(searchParams.get("start") || "0");
  console.log("URL param:", searchParams.get("start")); 
  console.log("startIndex:", startIndex);    
  const [cards] = useState(() => {
    const saved = localStorage.getItem("exploreCards");
    return saved ? JSON.parse(saved) : [];
  });
  return <main><SwipeVenture key={startIndex} cards={cards} startindex={startIndex} /></main>;
}

export default SwipePage;