import React, { useState } from "react";
import SwipeVenture from "../components/swipeCard";
import { useSearchParams } from "react-router-dom";
import exploreCards from "../data/exploreCards";
function SwipePage({cards=exploreCards, onAddToPlan}) {
  const [searchParams] = useSearchParams();
  const startIndex = parseInt(searchParams.get("start") || "0");
  console.log("URL param:", searchParams.get("start")); 
  console.log("startIndex:", startIndex);    
  return <main><SwipeVenture key={startIndex} cards={cards} startindex={startIndex} onAddToPlan={onAddToPlan} /></main>;
}

export default SwipePage;